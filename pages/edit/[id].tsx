import { useCallback, useMemo } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import { Updater, useImmer } from "use-immer";
import { MockFeedback } from "../../types";
import { InputDropdown, Input, InputTextArea } from "../../components";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const responseData = await axios
    .get(`https://protected-hamlet-83366.herokuapp.com/${context.params!.id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));

  return {
    props: { data: responseData },
  };
};

export default function EditFeedback({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { id } = router.query;

  const [inputTemplate, setInputTemplate] = useImmer<MockFeedback>({
    _id: data._id,
    comments: data.comments,
    description: data.description,
    status: data.status,
    title: data.title,
    type: data.type,
    vote: data.vote,
  });

  const handleEditData = useCallback(() => {
    axios({
      method: "post",
      url: `https://protected-hamlet-83366.herokuapp.com/update/${id}`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        title: inputTemplate.title,
        description: inputTemplate.description,
        type: inputTemplate.type,
        status: inputTemplate.status,
      },
    })
      .then(() => router.push("/"))
      .catch((err) => console.log(err.message));
  }, [
    id,
    inputTemplate.description,
    inputTemplate.status,
    inputTemplate.title,
    inputTemplate.type,
    router,
  ]);

  const InputContainer = useCallback(
    (inputTemplate: MockFeedback, setInputTemplate: Updater<MockFeedback>) => {
      return (
        <div>
          <Input
            title="Feedback Title"
            label="Add a short, descriptive headline"
            toggleFunction={(value) =>
              setInputTemplate((draft) => void (draft.title = value))
            }
            defaultValue={inputTemplate.title}
          />
          <InputDropdown
            title="Category"
            label="Choose a category for your feedback"
            list={["Feature", "UI", "UX", "Enhancement", "Bug"]}
            flex="flex-col"
            defaultValue={inputTemplate.type}
            toggleFunction={(value) =>
              setInputTemplate((draft) => void (draft.type = value))
            }
          />
          <InputDropdown
            title="Status"
            label="Choose a status for your feedback"
            list={["Planned", "In-Progress", "Live", "Suggestion"]}
            flex="flex-col"
            defaultValue={inputTemplate.status}
            toggleFunction={(value) =>
              setInputTemplate((draft) => void (draft.status = value))
            }
          />
          <InputTextArea
            title="Feedback Detail"
            label="Include any specific comments on what should be improved, added, etc."
            defaultValue={inputTemplate.description}
            toggleFunction={(value) =>
              setInputTemplate((draft) => void (draft.description = value))
            }
          />
        </div>
      );
    },
    []
  );

  const ButtonContainer = useMemo(() => {
    return (
      <div className="flex-col sm:flex-row  text-white flex justify-end mt-8">
        <button
          className="bg-darkBlue sm:mr-4 px-8 py-3 rounded-md font-bold"
          onClick={() => router.back()}
        >
          Cancel
        </button>
        <button
          className="bg-purple px-8 py-3 rounded-md font-bold mt-4 sm:mt-0"
          onClick={() => handleEditData()}
        >
          Add Feedback
        </button>
      </div>
    );
  }, [handleEditData, router]);

  return (
    <div className="sm:w-128 mx-auto p-8">
      <Head>
        <title>Edit Feedback</title>
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

          {InputContainer(inputTemplate, setInputTemplate)}

          {ButtonContainer}
        </div>
      </div>
    </div>
  );
}
