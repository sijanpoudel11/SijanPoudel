export interface Experience {
  company: string;
  role: string;
  website: string;
  location: string;
  period: string;
  summary: string;
  responsibilities: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    company: "3Bird",
    role: "Software Engineer",
    website: "https://3bird.nl",
    location: "Netherlands · Remote",
    period: "Oct 2024 - Present",
    summary:
      "Led end-to-end mobile app delivery for a production product, covering architecture, CI/CD automation, testing, and release operations.",
    responsibilities: [
      "Led end-to-end development and architecture of the production mobile app and set up automated CI/CD pipelines through Codemagic to reduce manual deployment time by 80%.",
      "Improved release quality by writing unit tests and configuring Maestro end-to-end UI testing, cutting production bugs by 50%.",
      "Worked in a Scrum workflow with Jira, backend engineers, and product managers to align API contracts, scope, and release timelines.",
      "Monitored production stability with Firebase Crashlytics and resolved crash issues to keep the app reliable after each release.",
      "Published alternative payment flows using Apple ExternalPurchaseCustomLink and Google External Offers API to support compliant in-app transactions.",
      "Extended the existing web application with Keycloak SSO and role-based user management features.",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "CI/CD",
      "Maestro",
      "Keycloak",
      "REST API",
    ],
  },
  {
    company: "Kotuko",
    role: "Mobile App Developer",
    website: "https://kotuko.it",
    location: "Kathmandu, Nepal · Hybrid",
    period: "Apr 2021 - Sep 2024",
    summary:
      "Built and launched multiple apps from scratch, focusing on growth, security, accessibility, and performance improvements.",
    responsibilities: [
      "Developed apps such as BicoccApp and R-kare from the ground up and shipped them successfully to app stores, reaching 25,000+ combined downloads.",
      "Executed App Store Optimization strategies for Google Play and the App Store to improve organic discoverability and growth.",
      "Collaborated with UI/UX designers and backend engineers in Agile/Scrum delivery using Jira, translating designs into polished builds and aligning API contracts ahead of each sprint.",
      "Implemented layered security defenses including root/jailbreak detection and RASP, while ensuring full accessibility support for TalkBack, VoiceOver, and external keyboards.",
      "Refactored legacy codebases into cleaner architecture patterns and introduced offline caching to reduce crashes and improve loading speed.",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "BLoC",
      "Riverpod",
      "REST API",
      "Accessibility",
      "Security",
    ],
  },
  {
    company: "Zenlab",
    role: "Flutter Intern",
    website: "https://www.facebook.com/ZenLabNepal/about/",
    location: "Kathmandu, Nepal",
    period: "Dec 2020 - Apr 2021",
    summary:
      "Supported mobile app development in an Agile environment and contributed to UI implementation and cross-functional collaboration.",
    responsibilities: [
      "Developed mobile applications with Flutter while contributing to feature implementation and bug fixes.",
      "Worked closely with designers and backend developers to turn requirements into polished app experiences.",
      "Participated in Agile sprints and code review workflows to improve delivery quality and team coordination.",
    ],
    techStack: ["Flutter", "Dart", "Agile", "UI/UX", "Collaboration"],
  },
];
