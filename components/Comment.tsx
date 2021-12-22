import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import { useImmer } from "use-immer";
import { Comments, IndividualComment } from "../types";
import InputComment from "./Input/InputComment";

const Comment = ({
  comment,
  name,
  profilePicture,
  username,
  replyTo,
  _id,
  router_id,
}: Comments) => {
  const [reply, setReply] = useState<boolean>(false);
  const [replyInputTemplate, setReplyInputTemplate] =
    useImmer<IndividualComment>({
      profilePicture: "/Images/user-images/image-jesse.jpg",
      name: "tony",
      username: "handleryouth",
      comment: "",
      replyTo: username,
    });

  const router = useRouter();

  const handleSubmitReply = useCallback(() => {
    axios({
      method: "post",
      url: `https://protected-hamlet-83366.herokuapp.com/reply/${router_id}`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        selected_id: _id,
        name: replyInputTemplate.name,
        profilePicture: replyInputTemplate.profilePicture,
        username: replyInputTemplate.username,
        comment: replyInputTemplate.comment,
        replyTo: replyInputTemplate.replyTo,
      },
    })
      .then(() => {
        setReplyInputTemplate((draft) => {
          draft.comment = "";
        });
        router.reload();
      })
      .catch((err) => console.log(err));
  }, [
    _id,
    replyInputTemplate.comment,
    replyInputTemplate.name,
    replyInputTemplate.profilePicture,
    replyInputTemplate.replyTo,
    replyInputTemplate.username,
    router,
    router_id,
    setReplyInputTemplate,
  ]);

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
        <div className="flex small-phone:flex-row flex-col  small-phone:items-center justify-between">
          <div>
            <p className="text-darkBlue">{name}</p>
            <p className="text-grey">@{username}</p>
          </div>

          <p
            className="text-seablue font-bold cursor-pointer"
            onClick={() => {
              setReply((prevState) => !prevState);
            }}
          >
            Reply
          </p>
        </div>

        <p>
          {replyTo && <span className="text-purple mr-2">{replyTo}</span>}
          {comment}
        </p>

        {reply && (
          <InputComment
            toggleFunction={(value) =>
              setReplyInputTemplate((draft) => void (draft.comment = value))
            }
            toggleSubmit={handleSubmitReply}
          />
        )}
      </div>
    </div>
  );
};

export default Comment;
