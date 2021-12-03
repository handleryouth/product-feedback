import { SetStateAction } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Filter } from "./Filter";
import { RoadMap } from "./Roadmap/RoadMap";

interface SidebarProps {
  filter: undefined | "UI" | "UX" | "Enhancement" | "Bug" | "Feature";
  setFilter: React.Dispatch<
    SetStateAction<undefined | "UI" | "UX" | "Enhancement" | "Bug" | "Feature">
  >;
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const Sidebar = ({ filter, setFilter, open, setOpen }: SidebarProps) => {
  return (
    <div className=" md:mr-9 md:flex md:flex-row md:items-center md:justify-between lg:justify-start lg:flex-col">
      <div className="w-full justify-between flex  bg-cover bg-header-background-mobile md:w-auto md:bg-header-background-tablet  bg-no-repeat md:flex-col  md:h-44  md:rounded-md md:justify-end text-white p-4 lg:bg-header-background-desktop lg:w-60 lg:h-32">
        <div>
          <h3 className="text-xl font-bold">Frontend Mentor</h3>
          <p>Feedback Board</p>
        </div>

        <div className="md:hidden">
          <Hamburger toggled={open} toggle={setOpen} size={25} />
        </div>
      </div>

      <div className="hidden md:flex ">
        <Filter filter={filter} setFilter={setFilter} />
      </div>

      <div className="hidden md:block">
        <RoadMap />
      </div>
    </div>
  );
};
