import { proxy } from 'valtio';
import Services from "@/services";

const userStore = proxy({
    userInfo: {},

    async getUserInfo(callbackSuccess, callbackError) {
        Services.userService.getInfo().then((response) => {
            console.log(response);
            this.userInfo = {
                // "username": "admin-root",
                // "email": "admin@reallove.vn",
                // "phone_number": "0929862699",
                // "full_name": "HSA Admin",
                // "avatar": "https://api.hsabook.vn/uploads/2024-11-24/1732389723329.jpg",
                // "description": null,
                // "role": "admin",
                // "rank": 1,
                // "status": "active"
                ...response?.data?.data
            };
            typeof callbackSuccess === 'function' && callbackSuccess(response);
        }).catch((error) => {
            console.warn('Failed to fetch user info:', error);
            this.userInfo = {};
            typeof callbackError === 'function' && callbackError(error);
        });
    },
});

export default userStore;
