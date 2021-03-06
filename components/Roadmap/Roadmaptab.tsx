import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { IdProvider } from "@radix-ui/react-id";
import { RoadmaptabProps } from "../../types";
import StatusSection from "../StatusSection";

const Roadmaptab = ({ feedback }: RoadmaptabProps) => {
  const [selectedTab, setSelectedTab] = useState<
    "Planned" | "Live" | "In-Progress"
  >("Planned");

  return (
    <IdProvider>
      <Tabs.Root className="md:hidden" defaultValue="Planned">
        <Tabs.List className="flex justify-between py-4">
          <Tabs.TabsTrigger
            value="Planned"
            onClick={() => setSelectedTab("Planned")}
            className={`${
              selectedTab === "Planned" && "border-cream border-b-4"
            } cursor-pointer  py-4 `}
          >
            Planned
          </Tabs.TabsTrigger>
          <Tabs.TabsTrigger
            value="Live"
            onClick={() => setSelectedTab("Live")}
            className={`${
              selectedTab === "Live" && " border-b-4 border-skyblue"
            } cursor-pointer py-4 `}
          >
            Live
          </Tabs.TabsTrigger>
          <Tabs.TabsTrigger
            value="In-Progress"
            onClick={() => setSelectedTab("In-Progress")}
            className={`${
              selectedTab === "In-Progress" && " border-purple border-b-4"
            } cursor-pointer py-4 `}
          >
            In-Progress
          </Tabs.TabsTrigger>
        </Tabs.List>
        <Tabs.Content value="Planned">
          <StatusSection
            title="Planned"
            description="Ideas prioritized for research"
            data={feedback.filter((mock) => mock.status === "Planned")}
          />
        </Tabs.Content>
        <Tabs.Content value="Live">
          <StatusSection
            title="Live"
            description="Released features"
            data={feedback.filter((mock) => mock.status === "Live")}
          />
        </Tabs.Content>
        <Tabs.Content value="In-Progress">
          <StatusSection
            title="In-progress"
            description="Currently being developed"
            data={feedback.filter((mock) => mock.status === "In-Progress")}
          />
        </Tabs.Content>
      </Tabs.Root>
    </IdProvider>
  );
};

export default Roadmaptab;
