import Image from "next/image";
import { useCallback } from "react";
import { RoadmapChild } from ".";
import { MockFeedback } from "../mock";

interface StatusSectionProps {
  title: "Planned" | "In-progress" | "Live";
  description: string;
  data: MockFeedback[];
}

export const StatusSection: React.FC<StatusSectionProps> = ({
  title,
  description,
  data,
}) => {
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
              className={`my-8 p-8 border-t-4 ${borderColorSwitching()} bg-white rounded`}
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
