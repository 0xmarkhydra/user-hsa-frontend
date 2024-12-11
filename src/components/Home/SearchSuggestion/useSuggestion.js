import { useEffect, useState } from "react";

const useSuggestTion = () => {
  const [listKeys, setListKeys] = useState([]);

  useEffect(() => {
    setListKeys([
      "Theo dõi thông tin kỳ thi ở đâu?",
      "Cách đăng ký khóa học",
      "Hỏi đáp về kỳ thi",
      "Tài liệu ôn thi HSA",
      "Từ khoá 5",
      "Thông tin về kỳ thi HSA",
    ]);
  }, []);
  return {
    listKeys,
  };
};

export default useSuggestTion;
