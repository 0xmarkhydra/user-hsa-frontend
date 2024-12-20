import React from "react";
import useTeacherSuggestion from "./useTeacherSuggestion";
import Image from "next/image";

const TeacherSuggestionView = () => {
  const { teacherSuggestions } = useTeacherSuggestion();
  return (
    <div className="mt-5 bg-white rounded-lg p-4 w-full overflow-hidden flex justify-center flex-col">
      <div className="overflow-x-scroll flex gap-3 w-full">
        {teacherSuggestions.map((teacher) => (
          <div
            key={teacher.id}
            className="relative aspect-[3/4] overflow-hidden cursor-pointer rounded-md shrink-0 bg-gray-400 basis-1/3 xs:basis-1/4 sm:basis-1/5 md:basis-1/6"
          >
            <Image src={teacher.avatarUrl} layout="fill" alt="teacher avatar" />
            <span className="absolute bottom-0 w-full text-center p-2 text-sm font-semibold text-white bg-gradient-to-t from-black to-transparent leading-tight">
              {teacher.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherSuggestionView;
