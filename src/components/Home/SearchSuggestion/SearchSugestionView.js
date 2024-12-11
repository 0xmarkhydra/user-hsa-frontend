import React from "react";
import useSuggestTion from "./useSuggestion";

const SearchSugestion = () => {
  const { listKeys } = useSuggestTion();
  return (
    <div class="max-w-4xl mx-auto bg-white p-6 rounded-md">
      <h1 class="text-[#2E7D32] text-xl font-medium mb-8">
        Bạn đang tìm kiếm gì?
      </h1>

      <div className="flex flex-wrap gap-3">
        {listKeys.map((key, index) => (
          <div
            key={index}
            class="bg-[#F8F9FA] rounded-lg p-2 cursor-pointer hover:shadow-md"
          >
            <span class="text-[#2E7D32] truncate">{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSugestion;
