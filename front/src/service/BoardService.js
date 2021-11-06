import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8081/api/forums";

class BoardService {
    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }

    createBoard(board) {
        return axios.post(BOARD_API_BASE_URL, board);
    }

    getOneBoard(no) {
        return axios.get(BOARD_API_BASE_URL+"/"+no);
    }

    updateBoard(no, board) {
        return axios.patch(BOARD_API_BASE_URL+"/"+no, board);
    }

    deleteBoard(no) {
        return axios.delete(BOARD_API_BASE_URL+"/"+no);
    }

    getComments(no) {
        return axios.get(BOARD_API_BASE_URL+"/"+no+"/comments");
    }

    createComment(no, comment) {
        return axios.post(BOARD_API_BASE_URL+"/"+no+"/comments", comment);
    }

}

export default new BoardService;