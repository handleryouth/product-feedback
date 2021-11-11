import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { Input, InputDropdown, InputTextArea } from "../components";
import { Dispatch, SetStateAction, useState } from "react";
import { MockFeedback } from "../mock";

const InputContainer = (
  setData: Dispatch<SetStateAction<string | undefined>>
) => {
  return (
    <div>
      <Input title="Feedback Title" label="Add a short, descriptive headline" />
      <InputDropdown
        title="Category"
        label="Choose a category for your feedback"
        list={["Feature", "UI", "UX", "Enhancement", "Bug"]}
        flex="flex-col"
        toggleFunction={(value) => setData(value)}
      />
      <InputTextArea
        title="Feedback Detail"
        label="Include any specific comments on what should be improved, added, etc."
      />
    </div>
  );
};

const ButtonContainer = () => {
  return (
    <div className="text-white flex justify-end mt-8">
      <button className="bg-darkBlue mr-4 px-8 py-3 rounded-md font-bold">
        Cancel
      </button>
      <button className="bg-purple px-8 py-3 rounded-md font-bold">
        Add Feedback
      </button>
    </div>
  );
};

const AddFeedback: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<string>();

  return (
    <div className="w-128 mx-auto">
      <div className="flex items-center">
        <Image
          src="/Images/shared/icon-arrow-left.svg"
          width={10}
          height={12}
          alt="Go Back Arrow"
          layout="fixed"
        />
        <p className="ml-3" onClick={() => router.back()}>
          Go Back
        </p>
      </div>

      <div className="relative py-12 px-10 bg-white mt-16">
        <div className="absolute bg-header-background-desktop rounded-full w-16 h-16 flex items-center justify-center  -top-8 ">
          <Image
            src="/Images/shared/icon-plus.svg"
            width={20}
            height={20}
            alt="Add Icon"
            layout="fixed"
          />
        </div>
        <div>
          <h3 className="text-2xl text-darkBlue font-bold">
            Create New Feedback
          </h3>
          {InputContainer(setData)}
          {ButtonContainer()}
        </div>
      </div>
    </div>
  );
};

export default AddFeedback;
