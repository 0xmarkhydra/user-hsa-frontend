import { useState, useEffect } from "react";

const useTeacherSuggestion = () => {
  const [teacherSuggestions, setTeacherSuggestions] = useState([]);

  useEffect(() => {
    setTeacherSuggestions([
      {
        id: 1,
        name: "Nguyễn Văn A",
        avatar: "",
      },
      {
        id: 2,
        name: "Trần Thị B",
        avatar: "",
      },
      {
        id: 3,
        name: "Lê Minh C",
        avatar: "",
      },
      {
        id: 4,
        name: "Phạm Hương D",
        avatar: "",
      },
      {
        id: 5,
        name: "Hoàng Quốc E",
        avatar: "",
      },
      {
        id: 6,
        name: "Lê Minh C",
        avatar: "",
      },
      {
        id: 7,
        name: "Phạm Hương D",
        avatar: "",
      },
      {
        id: 8,
        name: "Hoàng Quốc E",
        avatar: "",
      },
    ]);
  }, []);
  return { teacherSuggestions };
};

export default useTeacherSuggestion;
