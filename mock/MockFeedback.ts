import { MockFeedback } from "../types";

export const mockFeedback: MockFeedback[] = [
  {
    _id: "61b76995f82758dfc4fdbc8a",
    title: "Add tags for solutions",
    description: "Easier to search for solutions based on a specific stack.",
    comments: [
      {
        profilePicture: "/Images/user-images/image-suzanne.jpg",
        name: "Suzanne Chang",
        username: "upbeat1811",
        comment:
          "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
        _id: "61bb17546eacd7d53eb74094",
        reply: [],
      },
      {
        profilePicture: "/Images/user-images/image-thomas.jpg",
        name: "Thomas Hood",
        username: "brawnybrave",
        comment:
          "Please use fun, color-coded labels to easily identify them at a glance",
        _id: "61bb17666eacd7d53eb74095",
        reply: [],
      },
    ],
    type: "Enhancement",
    vote: 99,
    status: "Planned",
  },
  {
    _id: "61b76c0bf82758dfc4fdbc8d",
    title: "Add a dark theme option",
    description:
      "It would help people with light sensitivities and who prefer dark mode.",
    comments: [
      {
        profilePicture: "/Images/user-images/image-elijah.jpg",
        name: "Elijah Moss",
        comment:
          "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
        username: "hexagon.bestagon",
        _id: "61bb17846eacd7d53eb74096",
        reply: [],
      },
      {
        profilePicture: "/Images/user-images/image-james.jpg",
        name: "James Skinner",
        comment:
          "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and apparently saves battery life.",
        username: "hummingbird1",
        _id: "61bb17956eacd7d53eb74097",
        reply: [
          {
            profilePicture: "/Images/user-images/image-anne.jpg",
            name: "Anne Valentine",
            comment:
              "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
            username: "annev1990",
            replyTo: "hummingbird1",
            _id: "61bb17a26eacd7d53eb74098",
          },
          {
            profilePicture: "/Images/user-images/image-ryan.jpg",
            name: "Ryan Walles",
            comment:
              "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
            username: "voyager.344",
            replyTo: "annev1990",
            _id: "61bb17ac6eacd7d53eb74099",
          },
        ],
      },
    ],
    type: "Feature",
    vote: 99,
    status: "Planned",
  },
  {
    _id: "61b77110f82758dfc4fdbc8e",
    title: "Q&A within the challenge hubs",
    description: "Challenge-specific Q&A would make for easy reference.",
    comments: [
      {
        profilePicture: "/Images/user-images/image-george.jpg",
        name: "George Partridge",
        comment:
          "Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",
        username: "soccerviewer8",
        _id: "61bb17fc6eacd7d53eb7409a",
        reply: [],
      },
    ],
    type: "Feature",
    vote: 65,
    status: "Planned",
  },
  {
    _id: "61b771f4f82758dfc4fdbc8f",
    title: "Add image/video upload to feedback",
    description: "Images and screencasts can enhance comments on solutions.",
    comments: [
      {
        profilePicture: "/Images/user-images/image-javier.jpg",
        name: "Javier Pollard",
        comment:
          "Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean",
        username: "warlikeduke",
        _id: "61bb181a6eacd7d53eb7409b",
        reply: [],
      },
      {
        profilePicture: "/Images/user-images/image-roxanne.jpg",
        name: "Roxanne Travis",
        comment:
          "Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior.",
        username: "peppersprime32",
        _id: "61bb18236eacd7d53eb7409c",
        reply: [],
      },
    ],
    type: "Enhancement",
    vote: 51,
    status: "Planned",
  },
  {
    _id: "61b77305f82758dfc4fdbc90",
    title: "Ability to follow others",
    description: "Stay updated on comments and solutions other people post.",
    comments: [
      {
        profilePicture: "/Images/user-images/image-victoria.jpg",
        name: "Victoria Mejia",
        comment:
          "I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?",
        username: "arlen_the_marlin",
        _id: "61bb18496eacd7d53eb7409d",
        reply: [
          {
            profilePicture: "/Images/user-images/image-zena.jpg",
            name: "Zena Kelley",
            comment:
              "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.",
            username: "velvetround",
            replyTo: "arlen_the_marlin",
            _id: "61bb18586eacd7d53eb7409e",
          },
        ],
      },
      {
        profilePicture: "/Images/user-images/image-jackson.jpg",
        name: "Jackson Barker",
        comment:
          "I've been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that",
        username: "countryspirit",
        _id: "61bb18636eacd7d53eb7409f",
        reply: [],
      },
    ],
    type: "Feature",
    vote: 42,
    status: "Planned",
  },
  {
    _id: "61b77589f82758dfc4fdbc91",
    title: "Preview images not loading",
    description:
      "Challenge preview images are missing when you apply a filter.",
    comments: [],
    type: "Bug",
    vote: 3,
    status: "Planned",
  },
  {
    _id: "61b775fff82758dfc4fdbc92",
    title: "More comprehensive reports",
    description:
      "It would be great to see a more detailed breakdown of solutions.",
    comments: [
      {
        profilePicture: "/Images/user-images/image-victoria.jpg",
        name: "Victoria Meija",
        comment:
          "This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",
        username: "arlen_the_marlin",
        _id: "61bb188f6eacd7d53eb740a0",
        reply: [],
      },
      {
        profilePicture: "/Images/user-images/image-jackson.jpg",
        name: "Jackson Barker",
        comment:
          "Yeah, this would be really good. I'd love to see deeper insights into my code!",
        username: "countryspirit",
        _id: "61bb18966eacd7d53eb740a1",
        reply: [],
      },
    ],
    type: "Feature",
    vote: 123,
    status: "Planned",
  },
  {
    _id: "61b7772ef82758dfc4fdbc93",
    title: "Learning Paths",
    description:
      "Sequenced projects for different goals to help people improve.",
    comments: [
      {
        profilePicture: "/Images/user-images/image-george.jpg",
        name: "George Partridge",
        username: "soccerviewer8",
        comment:
          "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
        _id: "61bb18d86eacd7d53eb740a2",
        reply: [],
      },
    ],
    type: "Feature",
    vote: 28,
    status: "Planned",
  },
  {
    _id: "61b77927f82758dfc4fdbc94",
    title: "One-click portfolio generation",
    description:
      "Add ability to create professional looking portfolio from profile.",
    comments: [
      {
        profilePicture: "/Images/user-images/image-ryan.jpg",
        name: "Ryan Welles",
        username: "voyager.344",
        comment:
          "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
        _id: "61bb19476eacd7d53eb740a3",
        reply: [],
      },
    ],
    type: "Feature",
    vote: 62,
    status: "In-Progress",
  },
  {
    _id: "61b779fff82758dfc4fdbc96",
    title: "Bookmark challenges",
    description: "Be able to bookmark challenges to take later on.",
    comments: [
      {
        profilePicture: "/Images/user-images/image-suzanne.jpg",
        name: "Suzanne Chang",
        username: "upbeat1811",
        comment:
          "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
        _id: "61bb19586eacd7d53eb740a4",
        reply: [],
      },
    ],
    type: "Feature",
    vote: 31,
    status: "In-Progress",
  },
  {
    _id: "61b77ab0f82758dfc4fdbc97",
    title: "Animated solution screenshots",
    description:
      "Screenshots of solutions with animations don’t display correctly.",
    comments: [],
    type: "Bug",
    vote: 9,
    status: "In-Progress",
  },
  {
    _id: "61b77b2cf82758dfc4fdbc98",
    title: "Add micro-interactions",
    description: "Small animations at specific points can add delight.",
    comments: [
      {
        profilePicture: "/Images/user-images/image-victoria.jpg",
        name: "Victoria Mejia",
        username: "arlen_the_marlin",
        comment:
          "I'd love to see this! It always makes me so happy to see little details like these on websites.",
        _id: "61bb197f6eacd7d53eb740a5",
        reply: [
          {
            profilePicture: "/Images/user-images/image-suzanne.jpg",
            name: "Suzanne Chang",
            comment:
              "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
            username: "upbeat1811",
            replyTo: "arlen_the_marlin",
            _id: "61bb19886eacd7d53eb740a6",
          },
        ],
      },
    ],
    type: "Enhancement",
    vote: 71,
    status: "Live",
  },
];
