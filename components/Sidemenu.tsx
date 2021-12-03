import { SetStateAction } from "react";
import { RoadMap } from "./Roadmap/RoadMap";
import { Filter } from "./Filter";

interface SidemenuProps {
  filter: undefined | "UI" | "UX" | "Enhancement" | "Bug" | "Feature";
  setFilter: React.Dispatch<
    SetStateAction<undefined | "UI" | "UX" | "Enhancement" | "Bug" | "Feature">
  >;
  visible: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
}

export const Sidemenu = ({ visible, setVisible, ...rest }: SidemenuProps) => {
  return (
    <div
      className={`${
        !visible && "-translate-x-full"
      } h-screen md:hidden bg-white p-4 absolute z-10 overflow-y-scroll duration-200`}
    >
      <div
        className="w-100 text-right text-2xl cursor-pointer"
        onClick={() => setVisible(false)}
      >
        x
      </div>
      <Filter {...rest} />
      <RoadMap />
    </div>
  );
};
