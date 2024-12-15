import { API_URL, API_URL_PUBLIC, api } from "@/config/axios";

class UserService {
    getInfo() {
        return api.request({
            method: "GET",
            url: "/users/info",
        });
    }
}

const userService = new UserService();

export default userService;
