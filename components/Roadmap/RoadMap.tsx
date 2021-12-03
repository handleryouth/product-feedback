import Link from "next/link";
import { RoadmapChild } from "./RoadmapChild";
import { mockFeedback } from "../../mock";

export const RoadMap = () => {
  return (
    <div className="rounded-md bg-white p-4 h-44 lg:h-auto lg:w-60 mt-16 sm:mt-0">
      <div className="flex justify-between mb-4">
        <p>RoadMap</p>
        <Link href="/roadmap" passHref>
          <p className="cursor-pointer">View</p>
        </Link>
      </div>

      <div className="w-44 h-44">
        <RoadmapChild
          title="Planned"
          amount={
            mockFeedback.filter((item) => item.status === "Planned").length
          }
          color="bg-cream"
        />

        <RoadmapChild
          title="In-Progress"
          amount={
            mockFeedback.filter((item) => item.status === "In-Progress").length
          }
          color="bg-purple"
        />

        <RoadmapChild
          title="Live"
          amount={mockFeedback.filter((item) => item.status === "Live").length}
          color="bg-skyblue"
        />
      </div>
    </div>
  );
};
