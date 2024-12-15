import { API_URL, API_URL_PUBLIC, api } from "@/config/axios";

class UserService {
    login(data) {
        return api.request({
            method: "POST",
            url: "/auth/login",
            data,
        });
    }
}

const userService = new UserService();

export default userService;
