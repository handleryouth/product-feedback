import { useRouter } from "next/router";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { InputDropdown } from ".";
import { MockFeedback } from "../mock";

interface CommandbarProps {
  setSort: Dispatch<SetStateAction<string>>;
  feedback: MockFeedback[];
}

export const Commandbar = ({ setSort, feedback }: CommandbarProps) => {
  const router = useRouter();
  return (
    <div className="bg-darkBlue flex items-center p-4 justify-between text-white md:rounded-md font-bold">
      <div className="flex items-center">
        <Image
          src="/Images/suggestions/icon-suggestions.svg"
          width={28}
          height={28}
          layout="fixed"
          alt="Suggestion Illustration"
        />

        <h3 className="ml-4">{feedback.length} Suggestions</h3>

        <div className="flex items-center ml-4">
          <InputDropdown
            label="Sort by"
            list={[
              "Most Upvotes",
              "Least Upvotes",
              "Most Comments",
              "Least Comments",
            ]}
            flex="flex-row"
            toggleFunction={(value) => setSort(value)}
          />
        </div>
      </div>

      <button
        className="text-white bg-purple rounded-md py-3 px-5 font-bold"
        onClick={() => router.push("/addfeedback")}
      >
        + Add Feedback
      </button>
    </div>
  );
};
