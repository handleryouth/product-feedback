import { SidemenuProps } from "../types";
import Filter from "./Filter";
import RoadMap from "./Roadmap/RoadMap";

const Sidemenu = ({ visible, setVisible, data, ...rest }: SidemenuProps) => {
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
      <RoadMap data={data} />
    </div>
  );
};

export default Sidemenu;
