const { useState, useEffect } = require("react");

const useBookCard = () => {
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
  ];

  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    setCardList(fakeCardList);
  }, []);

  return {
    cardList,
  };
};

export default useBookCard;
