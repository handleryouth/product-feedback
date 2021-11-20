import Head from "next/head";
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { Sidebar, Commandbar, FeedbackContainer } from "../components";
import { mockFeedback, MockFeedback } from "../mock";

const feedbackContainer = (feedback: MockFeedback[]) => {
  return (
    <div>
      {feedback.map((item) => {
        return (
          <FeedbackContainer
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            type={item.type}
            vote={item.vote}
          />
        );
      })}
    </div>
  );
};

const Home: NextPage = () => {
  const [feedback, setFeedback] = useState<MockFeedback[]>(mockFeedback);
  const [filter, setFilter] = useState<
    "UI" | "UX" | "Enhancement" | "Bug" | "Feature" | undefined
  >();

  const [sort, setSort] = useState<string>("Most Upvotes");

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
    <div className="flex w-4/5 mx-auto h-auto ">
      <Head>
        <title>Product Feedback</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Product Feedback from frontend mentor"
        />
        <meta name="keywords" content="NextJS, Tailwind CSS, React" />
        <meta name="author" content="handleryouth" />
      </Head>
      <Sidebar filter={filter} setFilter={setFilter} />
      <div className="w-full">
        <Commandbar setSort={setSort} feedback={feedback} />
        {feedback !== undefined && feedbackContainer(feedback)}
      </div>
    </div>
  );
};

export default Home;
