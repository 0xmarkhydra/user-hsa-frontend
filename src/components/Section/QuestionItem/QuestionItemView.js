import React from "react";
import VideoPlayerView from "@/components/Section/VideoPlayer/VideoPlayerView";

const QuestionItemView = ({ questionItem, index }) => {
  return (
    <div className="question-item border-b pb-5 mb-6">
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
          Đáp án: [{questionItem?.question?.answers.join(", ")}]
        </div>
        <div className="mt-2">
          <div className="collapse">
            <div className="text-sm italic cursor-pointer">
              Xem lời giải chi tiết
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  questionItem?.question?.solution ||
                  "Chưa có lời giải chi tiết",
              }}
              className="my-4"
            />
            {questionItem.question?.video && (
              <VideoPlayerView video={questionItem.question.video} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionItemView;