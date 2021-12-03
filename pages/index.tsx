import Head from "next/head";
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import {
  Sidebar,
  Commandbar,
  FeedbackContainer,
  Sidemenu,
} from "../components";
import { mockFeedback, MockFeedback } from "../mock";

const Home: NextPage = () => {
  const [feedback, setFeedback] = useState<MockFeedback[]>(mockFeedback);
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
          return <FeedbackContainer key={item.id} {...item} />;
        })}
      </div>
    );
  }, []);

  useEffect(() => {
    setFeedback(
      filter !== undefined
        ? mockFeedback
            .filter(
              (item) => item.status === "Suggestion" && item.type === filter
            )
            .sort(function (a, b) {
              return handleSorting(a, b);
            })
        : mockFeedback
            .filter((item) => item.status === "Suggestion")
            .sort(function (a, b) {
              return handleSorting(a, b);
            })
    );

    return () => {
      setFeedback(mockFeedback);
    };
  }, [filter, handleSorting]);

  return (
    <>
      <Sidemenu
        filter={filter}
        setFilter={setFilter}
        visible={open}
        setVisible={setOpen}
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
