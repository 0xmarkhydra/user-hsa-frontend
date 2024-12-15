import React from "react";
import VideoPlayerView from "../VideoPlayer/VideoPlayerView";
import AttachFileView from "../AttachFile/AttachFileView";
import QuestionItemView from "../QuestionItem/QuestionItemView";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const SECTION_TYPE = {
  CHUONG: "CHUONG",
  DE: "DE",
};

const SectionContentView = ({ data }) => {
  const router = useRouter();
  if (!data) {
    return;
  }
  return (
    <div className="h-full flex flex-col overflow-y-auto">
      <div className="flex gap-2 items-center text-[12px] xs:text-[16px]">
        <span
          className="whitespace-nowrap cursor-pointer text-gray-600 hover:text-green-600"
          onClick={() => router.push("/")}
        >
          Trang chủ
        </span>
        <span className="text-[10px]">
          <i class="fa-solid fa-chevron-right"></i>
        </span>
        <span
          className="truncate cursor-pointer text-gray-600 hover:text-green-600"
          onClick={() => router.push(`/active-book/${data.book_id}`)}
        >
          {data.bookName}
        </span>
        <span className="text-[10px]">
          <i class="fa-solid fa-chevron-right"></i>
        </span>
        <span className="truncate text-green-600 cursor-pointer">
          {data.title}
        </span>
      </div>

      <div className="w-full py-2 flex flex-col">
        <div className="relative w-full aspect-video">
          <Image layout="fill" src={data.cover} alt="Section cover" />
        </div>
        <h1 className="font-bold text-xl sm:text-2xl py-2">{data.title}</h1>
      </div>
      {data.description && (
        <div
          className="leading-[28px] mt-4 text-[16px]"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      )}
      {data.video && (
        <div className="w-full py-4">
          <VideoPlayerView video={data.video} />
          <span className="font-bold mt-2">[Video]</span>
        </div>
      )}
      <div className="flex flex-wrap gap-10 mt-3">
        {data?.attached?.map((item) => (
          <AttachFileView key={item.uid} item={item} />
        ))}
      </div>
      {data.type === SECTION_TYPE.DE && (
        <div>
          {data.exam?.exams_question ? (
            data.exam.exams_question.map((questionItem, index) => (
              <QuestionItemView
                key={`${questionItem.id}-${index}`}
                questionItem={questionItem}
                index={index}
              />
            ))
          ) : (
            <div className="empty w-full italic">Chưa có đề</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionContentView;