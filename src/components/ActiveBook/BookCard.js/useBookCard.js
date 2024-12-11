import usePagination from "@/hooks/usePagination";

const { useState, useEffect } = require("react");

const fakeCardList = [
  {
    id: 1,
    title: "Cẩm nang ôn thi HSA 2024",
    content: "Tài liệu giúp các bạn ôn thi đánh giá năng lực hiệu quả.",
    image: null,
    discard: "20%",
    author: "HSA education",
  },
  {
    id: 2,
    title: "Sách Đánh giá năng lực toàn diện cho tuyển thu thi HSA",
    content: "Phân tích chi tiết các dạng câu hỏi.",
    image: null,
    discard: "17%",
    author: "HSA education",
  },
  {
    id: 3,
    title: "Hành trình ôn thi TSA Đại học Bách Khoa Hà Nội",
    content: "Phương pháp tư duy logic và chiến lược làm bài.",
    image: null,
    discard: "15%",
    author: "HSA education",
  },
  {
    id: 4,
    title: "Cẩm nang ôn thi HSA 2024",
    content: "Tài liệu giúp các bạn ôn thi đánh giá năng lực hiệu quả.",
    image: null,
    discard: "20%",
    author: "HSA education",
  },
  {
    id: 5,
    title: "Sách Đánh giá năng lực toàn diện cho tuyển thu thi HSA",
    content: "Phân tích chi tiết các dạng câu hỏi.",
    image: null,
    discard: "17%",
    author: "HSA education",
  },
  {
    id: 6,
    title: "Hành trình ôn thi TSA Đại học Bách Khoa Hà Nội",
    content: "Phương pháp tư duy logic và chiến lược làm bài.",
    image: null,
    discard: "15%",
    author: "HSA education",
  },
  {
    id: 7,
    title: "Cẩm nang ôn thi HSA 2024",
    content: "Tài liệu giúp các bạn ôn thi đánh giá năng lực hiệu quả.",
    image: null,
    discard: "20%",
    author: "HSA education",
  },
  {
    id: 8,
    title: "Sách Đánh giá năng lực toàn diện cho tuyển thu thi HSA",
    content: "Phân tích chi tiết các dạng câu hỏi.",
    image: null,
    discard: "17%",
    author: "HSA education",
  },
  {
    id: 9,
    title: "Hành trình ôn thi TSA Đại học Bách Khoa Hà Nội",
    content: "Phương pháp tư duy logic và chiến lược làm bài.",
    image: null,
    discard: "15%",
    author: "HSA education",
  },
];

const useBookCard = () => {
  const [cardList, setCardList] = useState([]);
  const { currentData, currentPage, totalPages, nextPage, prevPage, goToPage } =
    usePagination(fakeCardList, 4);

  useEffect(() => {
    setCardList(currentData);
  }, [currentPage]);

  return {
    cardList,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
  };
};

export default useBookCard;
