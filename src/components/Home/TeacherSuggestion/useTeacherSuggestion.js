import Services from "@/services";
import { useState, useEffect } from "react";

const useTeacherSuggestion = () => {
  const [teacherSuggestions, setTeacherSuggestions] = useState([]);

  useEffect(() => {
    Services.blockService.getConfigData("teacher").then(
      (response) => {
        setTeacherSuggestions(response.data.data);
      }
    ).catch(err => {
      console.warn(err);
      setTeacherSuggestions([]);
    })
  }, []);
  return { teacherSuggestions };
};

export default useTeacherSuggestion;
