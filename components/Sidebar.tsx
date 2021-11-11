import Link from "next/link";
import { SetStateAction } from "react";
import { mockFeedback } from "../mock";
import { RoadmapChild } from ".";

interface SidebarProps {
  filter: undefined | "UI" | "UX" | "Enhancement" | "Bug" | "Feature";
  setFilter: React.Dispatch<
    SetStateAction<undefined | "UI" | "UX" | "Enhancement" | "Bug" | "Feature">
  >;
}

const filterContainer = (
  setFilter: React.Dispatch<
    SetStateAction<undefined | "UI" | "UX" | "Enhancement" | "Bug" | "Feature">
  >,
  filter: undefined | "UI" | "UX" | "Enhancement" | "Bug" | "Feature"
) => {
  return (
    <div className="flex flex-wrap bg-white w-60 rounded-md p-4 my-8">
      <div
        onClick={() => setFilter(undefined)}
        className={`${
          filter === undefined
            ? "bg-seablue text-white"
            : "text-blue-600 bg-lightgray"
        } m-2 py-1 px-4 rounded-md ml-2  font-black cursor-pointer`}
      >
        All
      </div>
      <div
        onClick={() => setFilter("UI")}
        className={`${
          filter === "UI"
            ? "bg-seablue text-white"
            : "text-blue-600 bg-lightgray"
        } m-2 py-1 px-4 rounded-md ml-2 font-black cursor-pointer`}
      >
        UI
      </div>
      <div
        onClick={() => setFilter("UX")}
        className={`${
          filter === "UX"
            ? "bg-seablue text-white"
            : "text-blue-600 bg-lightgray"
        } m-2 py-1 px-4 rounded-md ml-2 font-black cursor-pointer`}
      >
        UX
      </div>
      <div
        onClick={() => setFilter("Enhancement")}
        className={`${
          filter === "Enhancement"
            ? "bg-seablue text-white"
            : "text-blue-600 bg-lightgray"
        } m-2 py-1 px-4 rounded-md ml-2 font-black cursor-pointer`}
      >
        Enhancement
      </div>
      <div
        onClick={() => setFilter("Bug")}
        className={`${
          filter === "Bug"
            ? "bg-seablue text-white"
            : "text-blue-600 bg-lightgray"
        } m-2 py-1 px-4 rounded-md ml-2  font-black cursor-pointer`}
      >
        Bug
      </div>
      <div
        onClick={() => setFilter("Feature")}
        className={`${
          filter === "Feature"
            ? "bg-seablue text-white"
            : "text-blue-600 bg-lightgray"
        } m-2 py-1 px-4 rounded-md ml-2  font-black cursor-pointer`}
      >
        Feature
      </div>
    </div>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ filter, setFilter }) => {
  return (
    <div className="mr-9 ">
      <div className="flex bg-header-background-desktop flex-col w-60 h-32 rounded-md justify-end text-white pb-4 pl-4">
        <h3 className="text-xl font-bold">Frontend Mentor</h3>
        <p>Feedback Board</p>
      </div>

      {filterContainer(setFilter, filter)}

      <div className="w-60 rounded-md bg-white p-4">
        <div className="flex justify-between mb-4">
          <p>RoadMap</p>
          <Link href="/roadmap" passHref>
            <p className="cursor-pointer">View</p>
          </Link>
        </div>

        <div>
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
              mockFeedback.filter((item) => item.status === "In-Progress")
                .length
            }
            color="bg-purple"
          />

          <RoadmapChild
            title="Live"
            amount={
              mockFeedback.filter((item) => item.status === "Live").length
            }
            color="bg-skyblue"
          />
        </div>
      </div>
    </div>
  );
};
