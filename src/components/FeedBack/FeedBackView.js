import Image from "next/image";
import useFeedBack from "./useFeedBack";

const FeedBackView = ({ title }) => {
  const {
    feedbacks = [
      { id: 1, image: null },
      { id: 2, image: null },
      { id: 3, image: null },
      { id: 4, image: null },
    ],
  } = useFeedBack();

  if (!feedbacks) return null;

  return (
    <div className="mt-5 bg-white rounded-lg p-4 w-full overflow-hidden flex justify-center flex-col">
      <div className="flex justify-between my-3">
        <div className="text-green-600 text-xl font-semibold">{title}</div>
      </div>
      <div className="overflow-x-scroll flex gap-3 w-full">
        {feedbacks?.map((feedback) => (
          <div
            key={feedback.id}
            className="basis-full xs:basis-1/2 sm:basis-1/3 rounded-md overflow-hidden shadow-sm shrink-0"
          >
            <div className="w-full aspect-square relative bg-slate-500 overflow-hidden">
              <Image layout="fill" alt="card img" src={feedback.image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBackView;
