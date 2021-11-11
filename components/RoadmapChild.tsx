interface RoadmapChildProps {
  title: "Suggestion" | "Planned" | "In-Progress" | "Live";
  amount?: number;
  color: string;
}

export const RoadmapChild: React.FC<RoadmapChildProps> = ({
  title,
  amount,
  color,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className={`${color} rounded-full h-2 w-2`}></div>
        <p className="ml-4">{title}</p>
      </div>
      <p className="font-bold text-xl text-darkBlue">{amount}</p>
    </div>
  );
};
