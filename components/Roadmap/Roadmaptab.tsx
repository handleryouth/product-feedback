import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { mockFeedback } from "../../mock";
import { StatusSection } from "../StatusSection";

export const Roadmaptab = () => {
  const [selectedTab, setSelectedTab] = useState<
    "Planned" | "Live" | "In-Progress"
  >("Planned");

  return (
    <Tabs.Root className="md:hidden">
      <Tabs.List className="flex justify-between py-4 ">
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
          data={mockFeedback.filter((mock) => mock.status === "Planned")}
        />
      </Tabs.Content>
      <Tabs.Content value="Live">
        <StatusSection
          title="Live"
          description="Released features"
          data={mockFeedback.filter((mock) => mock.status === "Live")}
        />
      </Tabs.Content>
      <Tabs.Content value="In-Progress">
        <StatusSection
          title="In-progress"
          description="Currently being developed"
          data={mockFeedback.filter((mock) => mock.status === "In-Progress")}
        />
      </Tabs.Content>
    </Tabs.Root>
  );
};
