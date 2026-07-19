export interface NavTranslations {
  welcome: string;
  works: string;
  skills: string;
  experience: string;
  contact: string;
}

export interface HeroTranslations {
  badge: string;
  ctaPrimary: string;
  ctaSecondary: string;
  focusTitle: string;
  focusDesc: string;
  industries: string;
}

export interface SectionTranslations {
  projectsTitle: string;
  projectsSubtitle: string;
  skillsTitle: string;
  skillsSubtitle: string;
  experienceTitle: string;
  contactTitle: string;
  contactSubtitle: string;
  galleryLabel: string;
  galleryTitle: string;
}

export interface ButtonTranslations {
  appStore: string;
  playStore: string;
  viewGallery: string;
  sendMessage: string;
}

export interface FormTranslations {
  name: string;
  email: string;
  message: string;
}

export interface TranslationSet {
  nav: NavTranslations;
  hero: HeroTranslations;
  sections: SectionTranslations;
  buttons: ButtonTranslations;
  forms: FormTranslations;
}

export type LocaleCode = "en" | "np";

export const translations: Record<LocaleCode, TranslationSet> = {
  en: {
    nav: {
      welcome: "Welcome",
      works: "My Works",
      skills: "What I do",
      experience: "Experience",
      contact: "Get in touch",
    },
    hero: {
      badge: "Available for mobile and web product work",
      ctaPrimary: "Explore projects",
      ctaSecondary: "View resume",
      focusTitle: "Mobile-first product engineering",
      focusDesc:
        "Swift, SwiftUI, Flutter, Firebase, REST APIs, push notifications, and app store deployment.",
      industries:
        "Healthcare, education, travel, booking systems, communication, and event platforms.",
    },
    sections: {
      projectsTitle: "Projects and product showcases",
      projectsSubtitle:
        "These projects reflect the current portfolio content, from university apps to healthcare and meeting collaboration products.",
      skillsTitle: "What I do",
      skillsSubtitle:
        "A concise view of the skills and services reflected in the current portfolio.",
      experienceTitle: "Professional timeline",
      contactTitle: "Get in touch",
      contactSubtitle:
        "We can get in touch through the form below or by reaching out to my email address.",
      galleryLabel: "Project gallery",
      galleryTitle: "Project gallery",
    },
    buttons: {
      appStore: "App Store",
      playStore: "Play Store",
      viewGallery: "View gallery",
      sendMessage: "Send message",
    },
    forms: {
      name: "Name",
      email: "Email",
      message: "Message",
    },
  },
  np: {
    nav: {
      welcome: "स्वागत",
      works: "मेरो काम",
      skills: "मैले के गर्छु",
      experience: "अनुभव",
      contact: "सम्पर्क गर्नुहोस्",
    },
    hero: {
      badge: "मोबाइल र वेब प्रोडक्ट कार्यका लागि उपलब्ध",
      ctaPrimary: "प्रोजेक्टहरू हेर्नुहोस्",
      ctaSecondary: "रिज्युमे हेर्नुहोस्",
      focusTitle: "मोबाइल-प्रथम उत्पाद इन्जिनियरिङ",
      focusDesc:
        "Swift, SwiftUI, Flutter, Firebase, REST APIs, push notifications, र app store deployment.",
      industries:
        "स्वास्थ्य सेवा, शिक्षा, यात्रा, बुकिङ सिस्टम, सञ्चार, र घटना प्लेटफर्महरू।",
    },
    sections: {
      projectsTitle: "प्रोजेक्टहरू र उत्पाद प्रदर्शनहरू",
      projectsSubtitle:
        "यी परियोजनाहरूले विश्वविद्यालय एप देखि स्वास्थ्य सेवा र बैठक सहयोग उत्पादहरूसम्मको वर्तमान पोर्टफोलियो सामग्री प्रतिबिम्बित गर्छन्।",
      skillsTitle: "मैले के गर्छु",
      skillsSubtitle:
        "वर्तमान पोर्टफोलियोमा प्रतिबिम्बित गरिएका सीप र सेवाहरूको छोटो दृश्य।",
      experienceTitle: "व्यावसायिक समयरेखा",
      contactTitle: "सम्पर्क गर्नुहोस्",
      contactSubtitle:
        "तपाईंले तलको फारम वा मेरो इमेल मार्फत सम्पर्क गर्न सक्नुहुन्छ।",
      galleryLabel: "प्रोजेक्ट ग्यालेरी",
      galleryTitle: "प्रोजेक्ट ग्यालेरी",
    },
    buttons: {
      appStore: "एप स्टोर",
      playStore: "प्ले स्टोर",
      viewGallery: "ग्यालेरी हेर्नुहोस्",
      sendMessage: "सन्देश पठाउनुहोस्",
    },
    forms: {
      name: "नाम",
      email: "इमेल",
      message: "सन्देश",
    },
  },
};

export const localeOptions: Array<{ code: LocaleCode; label: string }> = [
  { code: "en", label: "English" },
  { code: "np", label: "नेपाली" },
];
