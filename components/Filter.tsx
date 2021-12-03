import { SetStateAction } from "react";

interface FilterProps {
  filter: undefined | "UI" | "UX" | "Enhancement" | "Bug" | "Feature";
  setFilter: React.Dispatch<
    SetStateAction<undefined | "UI" | "UX" | "Enhancement" | "Bug" | "Feature">
  >;
}

export const Filter = ({ setFilter, filter }: FilterProps) => {
  return (
    <div className=" flex bg-white w-60 rounded-md p-4 my-8 flex-wrap ">
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
