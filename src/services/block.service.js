import { API_URL, API_URL_PUBLIC, api } from "@/config/axios";

class BlogService {
    getListBlogs(params, isServerSide = false) {
        return api.request({
            method: "GET",
            url: `/books`,
            params: {
                page: params?.page || 1,
                take: params?.take || 10,
                ...params,
            },
            baseURL: isServerSide ? API_URL : API_URL_PUBLIC,
        });
    }
}

const blogService = new BlogService();

export default blogService;
