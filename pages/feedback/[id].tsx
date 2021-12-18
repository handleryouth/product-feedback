import { useCallback } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import { useImmer } from "use-immer";
import { MockFeedback, Comments } from "../../types";
import { Comment, FeedbackContainer } from "../../components";

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

export default function FeedbackDetails({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  const [commentTemplate, setCommentTemplate] = useImmer<
    Omit<Comments, "_id" | "replyTo">
  >({
    name: "tony",
    profilePicture: "/Images/user-images/image-jesse.jpg",
    username: "handleryouth",
    comment: "",
    reply: [],
  });

  const { id } = router.query;

  const handleSubmitComment = useCallback(() => {
    axios({
      method: "post",
      url: `https://protected-hamlet-83366.herokuapp.com/comment/${id}`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        name: commentTemplate.name,
        profilePicture: commentTemplate.profilePicture,
        username: commentTemplate.username,
        comment: commentTemplate.comment,
        reply: commentTemplate.reply,
      },
    })
      .then(() => {
        router.reload();
      })
      .catch((err) => console.log(err.message));
  }, [
    commentTemplate.comment,
    commentTemplate.name,
    commentTemplate.profilePicture,
    commentTemplate.reply,
    commentTemplate.username,
    id,
    router,
  ]);

  return (
    <div className="p-8">
      <Head>
        <title>Feedback</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Product Feedback from frontend mentor"
        />
        <meta name="keywords" content="NextJS, Tailwind CSS, React" />
        <meta name="author" content="handleryouth" />
      </Head>
      <div className="flex items-center justify-between  ">
        <div
          className="flex items-center cursor-pointer "
          onClick={() => router.back()}
        >
          <Image
            src="/Images/shared/icon-arrow-left.svg"
            alt="Left Arrow Icon"
            width={10}
            height={12}
            layout="fixed"
          />
          <p className="ml-2" onClick={() => router.push("/")}>
            Go Back
          </p>
        </div>

        <button
          className="text-white bg-seablue rounded-md py-3 px-5 font-bold"
          onClick={() => {
            router.push(`/edit/${id}`);
          }}
        >
          Edit Feedback
        </button>
      </div>

      <FeedbackContainer
        title={(data as MockFeedback).title}
        description={(data as MockFeedback).description}
        type={(data as MockFeedback).type}
        vote={(data as MockFeedback).vote}
      />

      <div className="bg-white p-8 rounded-md">
        <h3 className="text-2xl text-darkBlue font-bold">
          {(data as MockFeedback).comments.length} Comments
        </h3>
        {(data as MockFeedback).comments.map((comment, index) => {
          return (
            <div key={index}>
              <div>
                <Comment
                  key={comment._id}
                  _id={comment._id}
                  router_id={id?.toString()}
                  profilePicture={comment.profilePicture}
                  name={comment.name}
                  username={comment.username}
                  comment={comment.comment}
                />
              </div>

              <div className="ml-16">
                {comment.reply?.map((reply) => {
                  return (
                    <Comment
                      key={reply._id}
                      router_id={id?.toString()}
                      _id={comment._id}
                      profilePicture={reply.profilePicture}
                      name={reply.name}
                      username={reply.username}
                      comment={reply.comment}
                      replyTo={reply.replyTo}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col bg-white p-8 mt-4 rounded">
        <label htmlFor="addcomment" className="text-grey">
          Add Comment
        </label>
        <textarea
          style={{ resize: "none" }}
          id="addcomment"
          className="bg-lightgray h-36 rounded-md p-4 mt-3"
          placeholder="Type a comment"
          onChange={(e) =>
            setCommentTemplate((draft) => void (draft.comment = e.target.value))
          }
          maxLength={250}
        />
        <div className="flex justify-between items-center mt-4">
          <p className="text-grey">
            {250 - commentTemplate.comment.length} characters left
          </p>
          <button
            className="bg-purple px-8 py-3 rounded-md font-bold mt-4 sm:mt-0 text-white"
            onClick={() => handleSubmitComment()}
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
}
