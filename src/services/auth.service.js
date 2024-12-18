import { api } from "@/config/axios";

class AuthService {
    login(data) {
        return api.request({
            method: "POST",
            url: "/auth/login",
            data,
        });
    }

    logOut(){
        window.localStorage.removeItem("access_token");
    }
}

const authService = new AuthService();

export default authService;
