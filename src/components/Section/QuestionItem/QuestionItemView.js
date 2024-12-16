import React from "react";
import VideoPlayerView from "@/components/Section/VideoPlayer/VideoPlayerView";
import useQuestionItem from "./useQuestionItem";

const QuestionItemView = ({ questionItem, index }) => {
  const { viewDetail, toggleViewDetail } = useQuestionItem();

  return (
    <div className="question-item border-b p-4 mb-6 border bg-white rounded-xl">
      <div className="question font-bold mb-4 flex items-start gap-2">
        <span className="text-base font-bold text-black">{index + 1}.</span>
        <span
          className="text-base text-black"
          dangerouslySetInnerHTML={{
            __html: questionItem?.question?.question || "",
          }}
        />
      </div>
      <div className="ml-6">
        <div className="options">
          {questionItem?.question?.options.map((option) => (
            <div key={option.type} className="option flex mb-1">
              <span className="font-semibold mr-2">{option.type}.</span>
              <span dangerouslySetInnerHTML={{ __html: option.answer }} />
            </div>
          ))}
        </div>
        <div className="answer font-bold mt-4">
          Đáp án: {questionItem?.question?.answers.join(", ")}
        </div>
        <div className="mt-2">
          <div
            className="text-sm italic cursor-pointer flex gap-2 items-center"
            onClick={toggleViewDetail}
          >
            <i
              class={`fa-solid ${
                viewDetail ? "fa-chevron-down" : "fa-chevron-right"
              } text-[10px]`}
            ></i>
            Xem lời giải chi tiết
          </div>
          {viewDetail && (
            <>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    questionItem?.question?.solution ||
                    "Chưa có lời giải chi tiết",
                }}
                className="my-4"
              />
              {questionItem.question?.video && (
                <div className="flex items-center justify-center w-full bg-[rgba(0,0,0,0.75)]">
                  <div className="w-full md:w-3/4 lg:w-2/3 mb-6">
                    <VideoPlayerView video={questionItem.question.video} />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionItemView;
