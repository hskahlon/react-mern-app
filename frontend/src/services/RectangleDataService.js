import http from "../http-common"

class RectangleDataService {
    // get all
    getAll() {
        return http.get('users');
    }

}

export default new RectangleDataService();