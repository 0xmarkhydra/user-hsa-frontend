import { API_URL, API_URL_PUBLIC, api } from "@/config/axios";

class BookService {
  getActiveBooks() {
    return api.request({
      method: "GET",
      url: `/codes/my-book`,
      baseURL: API_URL,
    });
  }

  search(query) {
    return api.request({
      method: "GET",
      url: `/books/search`,
      params: {
        search: query,
      },
    });
  }
}

const bookService = new BookService();

export default bookService;
