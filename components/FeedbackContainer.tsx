import Image from "next/image";
import { useRouter } from "next/router";

interface FeedbackContainerProps {
  id?: string;
  title: string;
  description: string;
  type: "UI" | "UX" | "Enhancement" | "Bug" | "Feature" | string;
  vote: number;
}

export const FeedbackContainer = ({
  description,
  title,
  type,
  vote,
  id,
}: FeedbackContainerProps) => {
  const router = useRouter();
  return (
    <div
      className={`flex-col sm:flex-row flex my-4 bg-white sm:items-center rounded-md py-4 px-8 justify-between cursor-pointer ${
        id ? `hover:border-2 hover:border-purple` : ""
      }`}
      onClick={() => {
        id && router.push(`/feedback/${id}`);
      }}
    >
      <div className="flex items-center">
        <div className="hidden sm:flex flex-col items-center bg-purple-500  w-auto py-2 px-4 rounded bg-lightgray font-bold">
          <div>
            <Image
              src="/Images/shared/icon-arrow-up.svg"
              alt="Arrow up"
              width={10}
              height={7}
              layout="fixed"
            />
          </div>

          {vote}
        </div>

        <div className="sm:ml-8">
          <h3 className="text-xl font-extrabold text-darkBlue">{title}</h3>
          <p className="my-2 text-grey">{description}</p>
          <div className="text-seablue bg-lightgray font-bold w-min px-2 py-1 rounded">
            {type}
          </div>
        </div>
      </div>

      <div className="flex items-center mt-4 sm:mt-0 justify-between">
        <div className="flex sm:hidden flex-col items-center bg-purple-500  w-auto py-2 px-4 rounded bg-lightgray font-bold">
          <div>
            <Image
              src="/Images/shared/icon-arrow-up.svg"
              alt="Arrow up"
              width={10}
              height={7}
              layout="fixed"
            />
          </div>

          {vote}
        </div>

        <div className="flex items-center">
          <div className="mr-2 flex items-center">
            <Image
              src="/Images/shared/icon-comments.svg"
              alt="Comment Illustration"
              width={18}
              height={18}
              layout="fixed"
            />
          </div>

          <p>{vote}</p>
        </div>
      </div>
    </div>
  );
};
