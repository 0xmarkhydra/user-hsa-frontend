import { useState, useEffect } from "react";

const useTeacherSuggestion = () => {
  const [teacherSuggestions, setTeacherSuggestions] = useState([]);

  useEffect(() => {
    setTeacherSuggestions([
      {
        id: 1,
        name: "Nguyễn Văn A",
        avatar: null,
      },
      {
        id: 2,
        name: "Trần Thị B",
        avatar: null,
      },
      {
        id: 3,
        name: "Lê Minh C",
        avatar: null,
      },
      {
        id: 4,
        name: "Phạm Hương D",
        avatar: null,
      },
      {
        id: 5,
        name: "Hoàng Quốc E",
        avatar: null,
      },
      {
        id: 6,
        name: "Lê Minh C",
        avatar: null,
      },
      {
        id: 7,
        name: "Phạm Hương D",
        avatar: null,
      },
      {
        id: 8,
        name: "Hoàng Quốc E",
        avatar: null,
      },
    ]);
  }, []);
  return { teacherSuggestions };
};

export default useTeacherSuggestion;
