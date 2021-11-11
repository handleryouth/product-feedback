import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { Sidebar, Commandbar, FeedbackContainer } from "../components";
import { MockFeedback, mockFeedback } from "../mock";

const feedbackContainer = (feedback: MockFeedback[]) => {
  return (
    <div>
      {feedback.map((item, index) => {
        return (
          <FeedbackContainer
            key={index}
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
  const [feedback, setFeedback] = useState<MockFeedback[]>(
    mockFeedback
      .filter((item) => item.status === "Suggestion")
      .sort(function (a, b) {
        return b.vote - a.vote;
      })
  );
  const [filter, setFilter] = useState<
    "UI" | "UX" | "Enhancement" | "Bug" | "Feature" | undefined
  >();

  const [sort, setSort] = useState<string>("Most Upvotes");

  useEffect(() => {
    setFeedback(
      filter !== undefined
        ? mockFeedback.filter(
            (item) => item.status === "Suggestion" && item.type === filter
          )
        : mockFeedback.filter((item) => item.status === "Suggestion")
    );
  }, [filter]);

  console.log(sort);

  return (
    <div className="flex w-4/5 mx-auto h-auto">
      <Sidebar filter={filter} setFilter={setFilter} />
      <div className="w-full">
        <Commandbar setSort={setSort} feedback={feedback} />
        {feedback !== undefined && feedbackContainer(feedback)}
      </div>
    </div>
  );
};

export default Home;
