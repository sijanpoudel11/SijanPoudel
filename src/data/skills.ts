export interface Skill {
  title: string;
  description: string;
  icon: string;
  icons: string[];
}

export const skills: Skill[] = [
  {
    title: "Swift and SwiftUI",
    description: "Stunning visuals and animations using SwiftUI and Swift.",
    icon: "swift",
    icons: [
      "https://developer.apple.com/assets/elements/icons/swift/swift-64x64_2x.png",
      "https://developer.apple.com/assets/elements/icons/swiftui/swiftui-128x128_2x.png",
    ],
  },
  {
    title: "CoreData and SwiftData",
    description:
      "Native on-device storage for fast and secure data management.",
    icon: "database",
    icons: [
      "https://miro.medium.com/v2/resize:fit:600/format:webp/1*nm4j_6GfwWpqhuSPlbO-sg.png",
      "https://developer.apple.com/assets/elements/icons/swiftdata/swiftdata-96x96_2x.png",
    ],
  },
  {
    title: "Cross Platform Development",
    description: "Single codebase for iOS & Android using Dart and Flutter.",
    icon: "mobile",
    icons: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevz1T5UBqd7IOyTqlqL-Xfn_XZoTOv0BfVu1nu5JP4CtnLrFBqCuvJJ0&s=10",
      "https://img.icons8.com/color/512/flutter.png",
    ],
  },
  {
    title: "Authentication and Authorization",
    description: "OAuth & social login with Firebase, Apple, and Facebook.",
    icon: "shield",
    icons: [
      "https://icons.veryicon.com/png/o/miscellaneous/gcy_icofont/authentication-29.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQreg5asgIp65H1Vs8eZVeRkDH9XAg72-J2Ai9W2k7oCaySzOs9sanTcJw&s=10",
      "https://img.icons8.com/color/1200/java-web-token.jpg",
    ],
  },
  {
    title: "Material and Cupertino Design",
    description: "Platform-specific design for iOS and Android UIs.",
    icon: "palette",
    icons: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJYbXeLhbPL9NNFzrteWH_i4LGB4VnpC4y2qVGLshw3ZkqZ7jNV7-YYp4&s=10",
      "https://cdn-icons-png.flaticon.com/512/2875/2875379.png",
    ],
  },
  {
    title: "Firebase Integration",
    description:
      "Real-time database, authentication, cloud messaging, and analytics.",
    icon: "firebase",
    icons: [
      "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png",
      "https://static.vecteezy.com/system/resources/previews/049/401/758/non_2x/google-analytics-icon-on-transparent-background-free-png.png",
    ],
  },
  {
    title: "Responsive Design",
    description: "Optimized layouts across phones, tablets, and devices.",
    icon: "responsive",
    icons: [
      "https://cdn-icons-png.flaticon.com/512/1828/1828673.png",
      "https://cdn-icons-png.flaticon.com/512/2721/2721291.png",
    ],
  },
  {
    title: "Third Party Integrations",
    description: "Maps, payments, chats, analytics, and real-time systems.",
    icon: "plug",
    icons: [
      "https://static.vecteezy.com/system/resources/previews/016/716/478/non_2x/google-maps-icon-free-png.png",
      "https://images.applypixels.com/images/originals/8b37951d-49db-4eaf-b7b4-cb98eaf8ba14.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqA7oJmsogQw7CIJgLIsfANpICtskop6nyoeaWLhy4yzYqJ38TRwoC1Vfk&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQauk75ZXxBsbTQv9YuPNvUxwWD2qADpaLxPQFKSDkHoabqT445viRXyXqB&s=10",
    ],
  },
];
