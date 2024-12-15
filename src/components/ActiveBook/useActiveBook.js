import Services from "@/services";
import { useEffect, useState } from "react";

const useActiveBook = () => {
  const [activeBooks, setActiveBooks] = useState([]);

  useEffect(() => {
    Services.bookService
      .getActiveBooks()
      .then((books) => {
        setActiveBooks(books.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return { activeBooks };
};

export default useActiveBook;
