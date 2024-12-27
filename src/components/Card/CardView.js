import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import useCard, { CARD_TYPE } from "./useCard";

const CardView = ({ type }) => {
  const { cardList, title } = useCard(type);

  return (
    <div className="mt-5 bg-white rounded-lg p-4 w-full overflow-hidden flex justify-center flex-col">
      <div className="flex justify-between my-3">
        <div className="text-green-600 text-xl font-semibold">{title}</div>
      </div>
      <div className="overflow-x-scroll flex gap-3 w-full">
        {cardList.map((card) => (
          <div
            key={card.id}
            className="basis-full xs:basis-1/2 sm:basis-1/3 md:basis-1/4 rounded-md overflow-hidden shadow-sm shrink-0 bg-gray-50"
          >
            <div className="w-full aspect-[3/4] relative overflow-hidden bg-slate-100">
              <Image layout="fill" alt="card img" src={card.avatar} />
              {type === CARD_TYPE.BOOK && (
                <span className="absolute right-1 top-1 w-12 font-semibold bg-red-600 text-[12px] rounded-full text-white text-center p-1">
                  -{card.discard || "50%"}
                </span>
              )}
            </div>
            <div className="flex flex-col p-2">
              <h4 className="font-semibold text-green-600 text-lg">
                {card.name}
              </h4>
              <div className="mb-4">
                <div className="flex items-end gap-1 mb-2 text-sm text-green-600">
                  <i class="fa-regular fa-user"></i>
                  <span className="text-end leading-none">
                    {card.authors || "HSA Education"}
                  </span>
                </div>
                <p className="text-gray-600 text-sm text-green-600">{card.code_id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

CardView.PropTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
};

export default CardView;
