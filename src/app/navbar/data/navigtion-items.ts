import { NavigationItem } from "../models/navigation-item.model";

export const navigationItems: NavigationItem[] = [
    {
      name: "Home",
      route: "/home"
    },
    {
      name: "Get Started",
      routeItems: [{
        name: "The Code Unveiled",
        route: "/get_started/the_code"
      },
      {
        name: "The Lens At Work",
        route: "/get_started/the_lens",
        locked: true,
        lockedMessage: 'Get Started with the \'The Code Unveiled\' first!',
        unlockedMessage: '',
      },
      {
        name: "The Implications",
        route: "/get_started/the_implications",
        locked: true,
        lockedMessage: 'Pick up the lens before you get to this reading.',
        unlockedMessage: '',
      },
      {
        name: "The Good",
        route: "/get_started/the_good",
        locked: true,
        lockedMessage: 'Pick up the lens before you get to this reading.',
        unlockedMessage: '',
      },
      {
        name: "Quiz",
        route: "/activities/quiz",
        locked: true,
        lockedMessage: 'Finish all the readings to take the quiz',
        unlockedMessage: 'Attempt the quiz for further understanding on bias in technology',
      }]
    },
    {
      name: "Activities",
      routeItems: [{
        name: "Classroom discussions",
        route: "/activities/classroom_talk"
      },
      {
        name: "A talk with Alexa",
        route: "/activities/alexa_talk"
      },
      ],
      locked: true,
      lockedMessage: 'Please finish all readings under \'Get Started\' to begin activities.',
      unlockedMessage: '',
    },
    {
      name: "Credits",
      route: "/credits"
    }
  ]