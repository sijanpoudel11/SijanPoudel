export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  features: string[];
  appStoreUrl: string;
  playStoreUrl: string | null;
}

export const projects: Project[] = [
  {
    id: "meetingtrack",
    title: "MeetingTrack",
    shortDescription:
      "MeetingTrack is the ultimate tool for efficient meetings, from agenda creation to cloud-based minute-taking.",
    description:
      "We streamline collaboration with live tracking and automated task assignments, ensuring all data stays perfectly synced across our app and web platforms. To offer the best value and flexibility, we utilize independent third-party payment providers for direct billing, moving beyond traditional app store constraints.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/05/c5/b1/05c5b147-df27-b2c3-ac91-65ae41b99684/Placeholder.mill/400x400bb-75.webp",
    gallery: [
      "/images/meetingtrack/image1.png",
      "/images/meetingtrack/image2.png",
      "/images/meetingtrack/image3.png",
      "/images/meetingtrack/image4.png",
      "/images/meetingtrack/image5.png",
      "/images/meetingtrack/image6.png",
    ],
    features: [
      "Agenda creation",
      "Cloud-based minute-taking",
      "Live meeting tracking",
      "Automated task assignments",
      "Cross-platform sync",
      "Third-party payments",
    ],
    appStoreUrl: "https://apps.apple.com/pl/app/meetingtrack/id6474509747",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.proman.minutetrack",
  },
  {
    id: "bicocca",
    title: "BicoccaApp",
    shortDescription:
      "A private university app for students and teachers to access lessons, exams, notices, and communication tools.",
    description:
      "The application enables users to view upcoming lessons and events, access notices, register for exams, view results, schedule appointments, and chat with peers and teachers.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/9e/23/fc/9e23fc6f-142d-9374-8440-db343cafbe33/Placeholder.mill/400x400bb-75.webp",
    gallery: [
      "/images/bicocca/login.jpg",
      "/images/bicocca/extra.jpg",
      "/images/bicocca/calender.jpg",
      "/images/bicocca/career.jpg",
      "/images/bicocca/exams.jpg",
      "/images/bicocca/menu.jpg",
    ],
    features: [
      "Calendar for lessons and events",
      "Exam registration and cancellation",
      "Results and performance charts",
      "Teacher appointment scheduling",
      "In-app chat",
    ],
    appStoreUrl: "https://apps.apple.com/it/app/bicoccapp/id1635130039",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=it.bicoccapp.unimib&hl=ru",
  },
  {
    id: "rkare",
    title: "R-Kare",
    shortDescription:
      "A radiology-focused healthcare app helping patients communicate with doctors and manage appointments.",
    description:
      "Patients can view upcoming appointments, engage in direct chat with doctors, and share multimedia such as photos, videos, and voice recordings.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/0c/0c/a2/0c0ca290-5258-438b-735d-25f058b546a6/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/400x400ia-75.webp",
    gallery: [
      "/images/rkare/login.png",
      "/images/rkare/auth.png",
      "/images/rkare/otp.png",
      "/images/rkare/homepage.png",
      "/images/rkare/appointment_detail.png",
      "/images/rkare/calendar.png",
      "/images/rkare/survey_list.png",
      "/images/rkare/survey_detail.png",
      "/images/rkare/profile.png",
    ],
    features: [
      "Appointment tracking",
      "Patient-doctor chat",
      "Multimedia sharing",
      "Healthcare communication",
    ],
    appStoreUrl: "https://apps.apple.com/it/app/r-kare/id6502037376?l=en-GB",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=it.rkare&hl=en",
  },
  {
    id: "teatro-massimo",
    title: "Teatro Massimo App",
    shortDescription:
      "An app for exploring opera house events, getting tickets, and discovering promotions.",
    description:
      "The app helps visitors discover promotions, check calendars, find information on operas and concerts, and access exclusive promotions for the Teatro Massimo Palermo experience.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ec/28/f5/ec28f598-cdcb-e51e-de2a-e35fadd7e781/Placeholder.mill/400x400bb-75.webp",
    gallery: [
      "/images/teatro-massimo/homepage.webp",
      "/images/teatro-massimo/calendar.webp",
      "/images/teatro-massimo/promotions.webp",
      "/images/teatro-massimo/season.webp",
      "/images/teatro-massimo/extra.webp",
    ],
    features: [
      "Event calendar",
      "Ticket information",
      "Promotions discovery",
      "Exclusive promotions",
    ],
    appStoreUrl:
      "https://apps.apple.com/us/app/teatro-massimo-app/id6450954586",
    playStoreUrl: null,
  },
  {
    id: "social-house",
    title: "Social House",
    shortDescription:
      "A creative content-sharing platform connecting users with artists, festivals, and brands — featuring community engagement tools and a rewards program",
    description:
      "Social House is a creative content-sharing platform designed to connect users with their favorite artists, festivals, and brands through authentic, user-generated content. The app empowers a community of creators to share genuine moments, engage with the entertainment and lifestyle brands they love, and build meaningful connections within a like-minded creative network",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/03/b8/98/03b898a8-b75c-c237-7feb-25e1a6dd69ee/Placeholder.mill/400x400bb-75.webp",
    gallery: [],
    features: [
      "User authentication & profile management",
      "Long form content uploading",
      "Background & Persistent Upload System",
      "Analytics/engagement tracking",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/social-house/id6468769539",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.butchcollective.socialhouse&hl=en_US",
  },
];
