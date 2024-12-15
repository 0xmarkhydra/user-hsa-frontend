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

  activeBook(bookId, codeId) {
    return api.request({
      method: "POST",
      url: `/codes/active`,
      baseURL: API_URL,
      data: {
        book_code: Number(bookId),
        code_id: codeId,
      },
    });
  }
}

const bookService = new BookService();

export default bookService;
