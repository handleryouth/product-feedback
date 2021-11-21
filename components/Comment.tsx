import Image from "next/image";
import { useState } from "react";
import { useImmer } from "use-immer";
import { InputComment } from ".";
import { Comments, IndividualComment } from "../mock";

export const Comment = ({
  comment,
  name,
  profilePicture,
  username,
  replyTo,
}: Comments) => {
  const [reply, setReply] = useState<boolean>(false);
  const [inputTemplate, setInputTemplate] = useImmer<
    Omit<IndividualComment, "profilePicture">
  >({
    name: "Your name",
    username: "Your name",
    comment: "",
  });

  console.log(inputTemplate);

  return (
    <div className="flex items-start my-8">
      <div className="mr-4">
        <Image
          src={profilePicture}
          layout="fixed"
          width={40}
          height={40}
          alt="Profile Picture"
        />
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-darkBlue">{name}</p>
            <p className="text-grey">@{username}</p>
          </div>

          <p
            className="text-seablue font-bold cursor-pointer"
            onClick={() => setReply((prevState) => !prevState)}
          >
            Reply
          </p>
        </div>

        <p>
          {replyTo && <span>{replyTo}</span>}
          {comment}
        </p>

        {reply && (
          <InputComment
            toggleFunction={(value) =>
              setInputTemplate((draft) => void (draft.comment = value))
            }
          />
        )}
      </div>
    </div>
  );
};
