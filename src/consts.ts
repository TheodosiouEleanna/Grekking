export const menuItems = [
  {
    label: "Homepage",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "History of Team", href: "/about/history" },
      { label: "Team CVs", href: "/about/team" },
    ],
  },
  {
    label: "News",
    href: "/news",
    dropdown: [
      { label: "News", href: "/news/latest" },
      { label: "Blog", href: "/news/blog" },
      { label: "Activities", href: "/news/activities" },
      { label: "Calendar Program", href: "/news/calendar" },
    ],
  },
  {
    label: "Interactive Map",
    href: "/interactive-map",
  },
  {
    label: "Weather Map",
    href: "/weather-map",
  },
];
