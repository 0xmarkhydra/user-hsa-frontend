import { API_URL, API_URL_PUBLIC, api } from "@/config/axios";

class AuthService {
    login(data) {
        return api.request({
            method: "POST",
            url: "/auth/login",
            data,
        });
    }
}

const authService = new AuthService();

export default authService;
