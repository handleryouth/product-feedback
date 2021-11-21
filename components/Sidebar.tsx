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

const filterContainer = ({ setFilter, filter }: SidebarProps) => {
  return (
    <div className="hidden bg-white w-60 rounded-md p-4 my-8  md:flex flex-wrap ">
      <div
        onClick={() => setFilter(undefined)}
        className={`${
          filter === undefined
            ? "bg-seablue text-white "
            : "text-blue-600 bg-lightgray hover:bg-grey hover:bg-opacity-50"
        } m-2 py-1 px-4 rounded-md ml-2  font-black cursor-pointer  `}
      >
        All
      </div>
      <div
        onClick={() => setFilter("UI")}
        className={`${
          filter === "UI"
            ? "bg-seablue text-white"
            : "text-blue-600 bg-lightgray hover:bg-grey hover:bg-opacity-50"
        } m-2 py-1 px-4 rounded-md ml-2 font-black cursor-pointer`}
      >
        UI
      </div>
      <div
        onClick={() => setFilter("UX")}
        className={`${
          filter === "UX"
            ? "bg-seablue text-white"
            : "text-blue-600 bg-lightgray hover:bg-grey hover:bg-opacity-50"
        } m-2 py-1 px-4 rounded-md ml-2 font-black cursor-pointer hover:bg-grey`}
      >
        UX
      </div>
      <div
        onClick={() => setFilter("Enhancement")}
        className={`${
          filter === "Enhancement"
            ? "bg-seablue text-white"
            : "text-blue-600 bg-lightgray hover:bg-grey hover:bg-opacity-50"
        } m-2 py-1 px-4 rounded-md ml-2 font-black cursor-pointer hover:bg-grey`}
      >
        Enhancement
      </div>
      <div
        onClick={() => setFilter("Bug")}
        className={`${
          filter === "Bug"
            ? "bg-seablue text-white"
            : "text-blue-600 bg-lightgray hover:bg-grey hover:bg-opacity-50"
        } m-2 py-1 px-4 rounded-md ml-2  font-black cursor-pointer hover:bg-grey`}
      >
        Bug
      </div>
      <div
        onClick={() => setFilter("Feature")}
        className={`${
          filter === "Feature"
            ? "bg-seablue text-white"
            : "text-blue-600 bg-lightgray hover:bg-grey hover:bg-opacity-50"
        } m-2 py-1 px-4 rounded-md ml-2  font-black cursor-pointer hover:bg-grey`}
      >
        Feature
      </div>
    </div>
  );
};

export const Sidebar = ({ filter, setFilter }: SidebarProps) => {
  return (
    <div className=" md:mr-9 md:flex md:flex-row md:items-center md:justify-between lg:justify-start lg:flex-col">
      <div className="w-full flex  bg-cover bg-header-background-mobile md:w-auto md:bg-header-background-tablet  bg-no-repeat flex-col  md:h-44  md:rounded-md justify-end text-white p-4 lg:bg-header-background-desktop lg:w-60 lg:h-32">
        <h3 className="text-xl font-bold">Frontend Mentor</h3>
        <p>Feedback Board</p>
      </div>

      {filterContainer({ setFilter, filter })}

      <div className="rounded-md bg-white p-4 hidden md:block  h-44 lg:h-auto lg:w-60">
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
