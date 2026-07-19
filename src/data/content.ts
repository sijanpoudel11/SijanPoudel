export interface ProfileSocial {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  resumeUrl: string;
  location: string;
  email: string;
  phone: string;
  address: string;
  socials: ProfileSocial[];
  contactPrompt: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export const profile: Profile = {
  name: "Sijan Poudel",
  title: "Professional Mobile App Developer",
  summary:
    "With more than 4 years of experience in iOS Development and Flutter, I specialize in Swift, SwiftUI, SwiftData, Dart, Flutter, Firebase, REST APIs, push notifications, and app store deployment.",
  resumeUrl: "/resume.pdf",
  location: "Kathmandu, Nepal",
  email: "sijanp22@gmail.com",
  phone: "(+977) 9860833686",
  address: "Nagarjun-7, Kathmandu, Nepal",
  socials: [
    { label: "GitHub", url: "https://github.com/sijanpoudel11" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sijan-poudel-ab23a5208",
    },
  ],
  contactPrompt:
    "We can get in touch through the form below or by reaching out to my email address.",
};

export const navigation: NavigationItem[] = [
  { label: "Welcome", href: "#intro" },
  { label: "My Works", href: "#projects" },
  { label: "What I do", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Get in touch", href: "#contact" },
];
