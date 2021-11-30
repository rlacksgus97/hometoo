import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/users";

class UserService {

    signIn(user) {
        return axios.post(USER_API_BASE_URL+"/login", user);
    }

    signup(user) {
        return axios.post(USER_API_BASE_URL+"/signup", user);
    }

    logout() {
        localStorage.removeItem("authenticatedUserName");
        localStorage.removeItem("authenticatedUserEmail");
        localStorage.removeItem("token");
        window.location.href='/login';
    }

    isUserLoggedIn() {
        const token = localStorage.getItem("token");

        if (token) {
            return true;
        } else {
            return false;
        }
    }

    getLoggedInUserName() {
        let user = localStorage.getItem("authenticatedUserName");
        if (user === null) {
            return '';
        } else {
            return user;
        }
    }

    pageLoginCheck() {
        if (!this.isUserLoggedIn()) {
            alert('로그인 해주세요');
            window.location.href = '/login';
        }
    }

    userInfo() {
        return axios.get(USER_API_BASE_URL+"/info");
    }

    registerSuccessfulLoginForJwt(user, token) {
        localStorage.setItem("token", token);
        localStorage.setItem("authenticatedUserEmail", user.email);
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

    getUserName(user) {
        return axios.get(USER_API_BASE_URL+"/find/userName/"+user.email);
    }

    withdrawUser(email) {
        return axios.delete(USER_API_BASE_URL+"/withdraw/"+email);
    }

}

export default new UserService;