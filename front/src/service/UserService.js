import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8081/api/users";

class UserService {

    signIn(user) {
        return axios.post(USER_API_BASE_URL+"/login", user);
    }

    signup(user) {
        return axios.post(USER_API_BASE_URL+"/signup", user);
    }

    logout() {
        localStorage.removeItem("authenticatedUser");
        localStorage.removeItem("token");
        window.location.href='/login';
    }

    isUserLoggedIn() {
        const token = localStorage.getItem("token");
        console.log("Userloggedincheck => " + token);

        if (token) {
            return true;
        } else {
            return false;
        }
    }

    getLoggedInUserName() {
        let user = localStorage.getItem("authenticatedUser");
        if (user === null) {
            return '';
        } else {
            return user;
        }
    }

    userInfo() {
        return axios.get(USER_API_BASE_URL+"/info");
    }

    registerSuccessfulLoginForJwt(user, token) {
        localStorage.setItem("token", token);
        // localStorage.setItem("userName", user.name);
        localStorage.setItem("authenticatedUser", user.email);
        this.setupAxiosInterceptors();
    }

    createJWTToken(token) {
        return 'Bearer ' + token;
    }

    setupAxiosInterceptors() {
        axios.interceptors.request.use(
            config => {
                const token = localStorage.getItem("token");

                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                }
                return config;
            },
            error => {
                Promise.reject(error);
            }
        );
    }

    findPassword(email) {
        return axios.patch(USER_API_BASE_URL+"/find/password", email);
    }

}

export default new UserService;