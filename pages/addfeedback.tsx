import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { Input, InputDropdown, InputTextArea } from "../components";
import { MockFeedback } from "../mock";
import { Updater, useImmer } from "use-immer";

const InputContainer = (setInputTemplate: Updater<MockFeedback>) => {
  return (
    <div>
      <Input
        title="Feedback Title"
        label="Add a short, descriptive headline"
        toggleFunction={(value) =>
          setInputTemplate((draft) => void (draft.title = value))
        }
      />
      <InputDropdown
        title="Category"
        label="Choose a category for your feedback"
        list={["Feature", "UI", "UX", "Enhancement", "Bug"]}
        flex="flex-col"
        toggleFunction={(value) =>
          setInputTemplate((draft) => void (draft.type = value))
        }
      />
      <InputTextArea
        title="Feedback Detail"
        label="Include any specific comments on what should be improved, added, etc."
        toggleFunction={(value) =>
          setInputTemplate((draft) => void (draft.description = value))
        }
      />
    </div>
  );
};

const ButtonContainer = () => {
  const router = useRouter();
  return (
    <div className="flex-col sm:flex-row text-white flex justify-end mt-8">
      <button
        className="bg-darkBlue sm:mr-4 px-8 py-3 rounded-md font-bold"
        onClick={() => router.back()}
      >
        Cancel
      </button>
      <button className="bg-purple px-8 py-3 rounded-md font-bold mt-4 sm:mt-0">
        Add Feedback
      </button>
    </div>
  );
};

const AddFeedback: NextPage = () => {
  const router = useRouter();
  const [inputTemplate, setInputTemplate] = useImmer<MockFeedback>({
    id: uuidv4(),
    comments: [],
    description: "",
    status: "Suggestion",
    title: "",
    type: "Bug",
    vote: 0,
  });

  return (
    <div className="sm:w-128 mx-auto px-3 py-8">
      <Head>
        <title>Add New Feedback</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Product Feedback from frontend mentor"
        />
        <meta name="keywords" content="NextJS, Tailwind CSS, React" />
        <meta name="author" content="handleryouth" />
      </Head>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => router.back()}
      >
        <Image
          src="/Images/shared/icon-arrow-left.svg"
          width={10}
          height={12}
          alt="Go Back Arrow"
          layout="fixed"
        />
        <p className="ml-3 ">Go Back</p>
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

          {InputContainer(setInputTemplate)}

          {ButtonContainer()}
        </div>
      </div>
    </div>
  );
};

export default AddFeedback;
