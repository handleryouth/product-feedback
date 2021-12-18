import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { StatusSectionProps } from "../types";
import RoadmapChild from "./Roadmap/RoadmapChild";

const StatusSection = ({ title, description, data }: StatusSectionProps) => {
  const router = useRouter();

  const borderColorSwitching = useCallback(() => {
    switch (title) {
      case "Planned":
        return "border-cream";
      case "In-progress":
        return "border-purple";
      case "Live":
        return "border-skyblue";
    }
  }, [title]);

  return (
    <div>
      <h3 className="text-xl font-bold">
        {title} ({data.length})
      </h3>
      <p>{description}</p>
      <div className="mt-4">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={`my-8 p-8 border-t-4 cursor-pointer ${borderColorSwitching()} bg-white rounded`}
              onClick={() => {
                router.push("/feedback/" + item._id);
              }}
            >
              <RoadmapChild title={item.status} color="bg-indigo-700" />

              <div>
                <h3 className="text-xl font-bold my-4">{item.title}</h3>
                <p className="text-grey">{item.description}</p>
                <p className="px-2 py-1 bg-lightgray w-min rounded-lg my-4 text-seablue font-bold">
                  {item.type}
                </p>
              </div>

              <div className="flex items-center  justify-between mb-4 ">
                <div className="flex items-center bg-lightgray w-min px-3 py-2 rounded">
                  <Image
                    src="/Images/shared/icon-arrow-up.svg"
                    width={12}
                    height={10}
                    alt="Arrow Up Icon"
                    layout="fixed"
                  />
                  <p className="ml-2 font-bold">{item.vote}</p>
                </div>

                <div className="flex items-center">
                  <Image
                    src="/Images/shared/icon-comments.svg"
                    width={18}
                    height={18}
                    alt="Comment Icon"
                    layout="fixed"
                  />
                  <p className="ml-2 font-bold">{item.comments.length}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatusSection;
