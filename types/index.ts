import { Dispatch, SetStateAction } from "react";

export interface IndividualComment {
  _id?: string;
  profilePicture: string;
  name: string;
  username: string;
  comment: string;
  replyTo?: string;
}

export interface Comments extends IndividualComment {
  reply?: IndividualComment[];
  router_id?: string;
}

export interface MockFeedback {
  _id?: string;
  title: string;
  description: string;
  type: "UI" | "UX" | "Enhancement" | "Bug" | "Feature" | string;
  comments: Comments[];
  vote: number;
  status: "Planned" | "In-Progress" | "Live" | "Suggestion" | string;
}

export interface StatusSectionProps {
  title: "Planned" | "In-progress" | "Live";
  description: string;
  data: MockFeedback[];
}

export interface SidemenuProps {
  filter: undefined | "UI" | "UX" | "Enhancement" | "Bug" | "Feature";
  setFilter: React.Dispatch<
    SetStateAction<undefined | "UI" | "UX" | "Enhancement" | "Bug" | "Feature">
  >;
  visible: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
  data: MockFeedback[];
}

export interface SidebarProps {
  filter: undefined | "UI" | "UX" | "Enhancement" | "Bug" | "Feature";
  setFilter: React.Dispatch<
    SetStateAction<undefined | "UI" | "UX" | "Enhancement" | "Bug" | "Feature">
  >;
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  data: MockFeedback[];
}

export interface FilterProps {
  filter: undefined | "UI" | "UX" | "Enhancement" | "Bug" | "Feature";
  setFilter: React.Dispatch<
    SetStateAction<undefined | "UI" | "UX" | "Enhancement" | "Bug" | "Feature">
  >;
}

export interface FeedbackContainerProps {
  _id?: string;
  title: string;
  description: string;
  type: "UI" | "UX" | "Enhancement" | "Bug" | "Feature" | string;
  vote: number;
  comments?: Comments[];
}

export interface CommandbarProps {
  setSort: Dispatch<SetStateAction<string>>;
  feedback: MockFeedback[];
}

export interface RoadMapProps {
  data: MockFeedback[];
}

export interface RoadmaptabProps {
  feedback: MockFeedback[];
}

export interface RoadmapChildProps {
  title: "Planned" | "In-Progress" | "Live" | string;
  amount?: number;
  color: string;
}

export interface InputTextAreaProps {
  title: string;
  label: string;
  toggleFunction: (value: string) => void;
  defaultValue?: string;
}

export interface InputDropdownProps {
  title?: string;
  label: string;
  list: string[];
  flex: "flex-col" | "flex-row";
  toggleFunction: (value: string) => void;
  defaultValue?: string;
}

export interface InputCommentProps {
  toggleFunction: (value: string) => void;
  toggleSubmit: () => void;
}

export interface InputProps {
  title: string;
  label: string;
  toggleFunction: (e: string) => void;
  defaultValue?: string;
}
