import { useCallback, useEffect, useState } from "react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import axios from "axios";
import { MockFeedback } from "../types";
import {
  Sidebar,
  Commandbar,
  FeedbackContainer,
  Sidemenu,
} from "../components";

export const getServerSideProps: GetServerSideProps = async () => {
  const responseData = await axios
    .get("https://protected-hamlet-83366.herokuapp.com/")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err.message));

  return {
    props: { data: responseData },
  };
};

const Home: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [feedback, setFeedback] = useState<MockFeedback[]>(data);

  const [filter, setFilter] = useState<
    "UI" | "UX" | "Enhancement" | "Bug" | "Feature" | undefined
  >();

  const [sort, setSort] = useState<string>("Most Upvotes");
  const [open, setOpen] = useState(false);

  const handleSorting = useCallback(
    (a: MockFeedback, b: MockFeedback) => {
      switch (sort) {
        case "Most Upvotes":
          return b.vote - a.vote;
        case "Least Upvotes":
          return a.vote - b.vote;
        case "Most Comments":
          return b.comments.length - a.comments.length;
        case "Least Comments":
          return a.comments.length - b.comments.length;
        default:
          return b.vote - a.vote;
      }
    },
    [sort]
  );

  const feedbackContainer = useCallback((feedback: MockFeedback[]) => {
    return (
      <div>
        {feedback.map((item) => {
          return <FeedbackContainer key={item._id} {...item} />;
        })}
      </div>
    );
  }, []);

  useEffect(() => {
    setFeedback(
      filter !== undefined
        ? (data as MockFeedback[])
            .filter(
              (item) => item.status === "Suggestion" && item.type === filter
            )
            .sort(function (a, b) {
              return handleSorting(a, b);
            })
        : (data as MockFeedback[])
            .filter((item) => item.status === "Suggestion")
            .sort(function (a, b) {
              return handleSorting(a, b);
            })
    );

    return () => {
      setFeedback([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, handleSorting]);

  return (
    <>
      <Sidemenu
        filter={filter}
        setFilter={setFilter}
        visible={open}
        setVisible={setOpen}
        data={data as MockFeedback[]}
      />
      <div className="flex flex-col mx-auto h-auto px-8 lg:px-0 lg:flex-row lg:w-5/6 py-8">
        <Head>
          <title>Product Feedback</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="Product Feedback from frontend mentor"
          />
          <meta name="keywords" content="NextJS, Tailwind CSS, React" />
          <meta name="author" content="handleryouth" />
        </Head>

        <Sidebar
          filter={filter}
          setFilter={setFilter}
          open={open}
          setOpen={setOpen}
          data={data as MockFeedback[]}
        />
        <div className="w-full">
          <Commandbar setSort={setSort} feedback={feedback} />
          {feedback !== undefined && feedbackContainer(feedback)}
        </div>
      </div>
    </>
  );
};

export default Home;
