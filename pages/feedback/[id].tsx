import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { Comment, FeedbackContainer } from "../../components";
import { MockFeedback, mockFeedback } from "../../mock";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = mockFeedback.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      feedback: mockFeedback.filter((mock) => mock.id === context.params?.id),
    },
  };
};

interface FeedbackProps {
  feedback: MockFeedback[];
}

export default function FeedbackDetails({ feedback }: FeedbackProps) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
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
      <div className="flex items-center justify-between ">
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

      <div>
        {feedback.map((item) => {
          return (
            <FeedbackContainer
              key={item.id}
              title={item.title}
              description={item.description}
              type={item.type}
              vote={item.vote}
            />
          );
        })}
      </div>

      <div className="bg-white p-8 rounded-md">
        {feedback.map((item) => {
          return item.comments.map((comment, index) => {
            return (
              <>
                <div>
                  <Comment
                    key={index}
                    profilePicture={comment.profilePicture}
                    name={comment.name}
                    username={comment.username}
                    comment={comment.comment}
                  />
                </div>

                <div className="ml-16">
                  {comment.reply?.map((reply, index) => {
                    return (
                      <Comment
                        key={index}
                        profilePicture={reply.profilePicture}
                        name={reply.name}
                        username={reply.username}
                        comment={reply.comment}
                        replyTo={reply.replyTo}
                      />
                    );
                  })}
                </div>
              </>
            );
          });
        })}
      </div>
    </div>
  );
}
