import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://querywala.github.io/",
    title: "Querywala",
    description:
      "Turning data into insights, one query at a time. Practical guides on Microsoft Fabric, Azure, SQL, Power BI, AI, and Data Engineering.",
    author: "Abhi Gautam",
    profile: "https://github.com/Querywala",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Dubai",
    dir: "ltr",
  },

  posts: {
    perPage: 6,
    perIndex: 6,
    scheduledPostMargin: 15 * 60 * 1000,
  },

  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/Querywala/Querywala.github.io/edit/main/",
    },
    search: "pagefind",
  },

  socials: [
    {
      name: "github",
      url: "https://github.com/Querywala",
    },
    {
      name: "linkedin",
      url: "https://ae.linkedin.com/in/abhi-gautam-data",
    },
    {
      name: "mail",
      url: "mailto:ization.in@gmail.com",
    },
  ],

  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});