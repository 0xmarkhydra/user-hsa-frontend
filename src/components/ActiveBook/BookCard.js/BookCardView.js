import Image from "next/image";
import React from "react";
import useBookCard from "./useBookCard";
import BookCardFooterView from "./BookCardFooterView";

const BookCardView = () => {
  const { cardList, currentPage, totalPages, goToPage } =
    useBookCard();
  return (
    <>
      <div className="flex w-full flex-wrap">
        {cardList.map((card) => (
          <div
            key={card.id}
            className="basis-full xs:basis-1/2 lg:basis-1/4 rounded-md overflow-hidden shadow-sm shrink-0 bg-white scale-95"
          >
            <div className="w-full aspect-square relative bg-slate-500 overflow-hidden">
              <Image layout="fill" alt="card img" src={card.image} />
            </div>
            <div className="flex flex-col py-2 px-4">
              <h4 className="font-semibold line-clamp-2 text-ellipsis my-2 text-lg">
                {card.title}
              </h4>
              <div className="flex items-end gap-1 mb-2">
                <i class="fa-regular fa-user"></i>
                <span className="text-end leading-none">{card.author}</span>
              </div>
              <p className="text-gray-600">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
      {/* FOOTER */}
      <BookCardFooterView
        totalPages={totalPages}
        onPageChange={goToPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default BookCardView;
