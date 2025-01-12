// export const menuItems = [
//   {
//     label: "Homepage",
//     href: "/",
//   },
//   {
//     label: "About Us",
//     href: "/about",
//     dropdown: [
//       { label: "History of Team", href: "/about/history" },
//       { label: "Team CVs", href: "/about/team" },
//     ],
//   },
//   {
//     label: "News",
//     href: "/news",
//     dropdown: [
//       { label: "Blog", href: "/news/blog" },
//       { label: "Activities", href: "/news/activities" },
//       { label: "Calendar Program", href: "/news/calendar" },
//     ],
//   },
//   {
//     label: "Interactive Map",
//     href: "/interactive-map",
//   },
//   {
//     label: "Weather Map",
//     href: "/weather-map",
//   },
// ];

export const menuItems = [
  {
    label: "Αρχική Σελίδα",
    href: "/",
  },
  {
    label: "Σχετικά με Εμάς",
    href: "/about",
    dropdown: [
      { label: "Ιστορία της Ομάδας", href: "/about/history" },
      { label: "Βιογραφικά Ομάδας", href: "/about/team" },
    ],
  },
  {
    label: "Νέα",
    href: "/news",
    dropdown: [
      { label: "Ιστολόγιο", href: "/news/blog" },
      { label: "Δραστηριότητες", href: "/news/activities" },
      { label: "Πρόγραμμα Ημερολογίου", href: "/news/calendar" },
    ],
  },
  {
    label: "Διαδραστικός Χάρτης",
    href: "/interactive-map",
  },
  {
    label: "Χάρτης Καιρού",
    href: "/weather-map",
  },
];

export const activities = [
  {
    id: 1,
    title: "Ανατολή Λάρισας",
    description:
      "Η Ανατολή είναι ένα χωριό στη νοτιοανατολική πλευρά της Όσσας (Κισσάβου). Είναι χτισμένη σε υψόμετρο 960 μέτρων και απέχει 42 χιλιόμετρα από τη Λάρισα.",
    location: "Ανατολή Λάρισας",
    position: [39.8336, 22.7261],
    image: "/path/to/anatoli-image.jpg",
    link: "https://hikingexperience.gr/anatoli",
  },
  {
    id: 2,
    title: "Πεζοπορία στα Μετέωρα",
    description: "Ανακαλύψτε τα ιστορικά μονοπάτια στα Μετέωρα.",
    location: "Μετέωρα",
    position: [39.7205, 21.6315],
    image: "/path/to/meteora-image.jpg",
    link: "https://hikingexperience.gr/meteora",
  },
  {
    id: 3,
    title: "Ορειβασία στον Όλυμπο",
    description: "Ανακαλύψτε τις κορυφές του Όλυμπου με θέα τη Μακεδονία.",
    location: "Όλυμπος",
    position: [40.0935, 22.3588],
    image: "/path/to/olympus-image.jpg",
    link: "https://hikingexperience.gr/olympus",
  },
  {
    id: 4,
    title: "Καγιάκ στον Βοϊδομάτη",
    description: "Απολαύστε καγιάκ στον καθαρό ποταμό Βοϊδομάτη.",
    location: "Βοϊδομάτης",
    position: [39.9539, 20.7103],
    image: "/path/to/voidomatis-image.jpg",
    link: "https://hikingexperience.gr/voidomatis",
  },
  {
    id: 5,
    title: "Πεζοπορία στη Σαμαριά",
    description:
      "Διασχίστε το φαράγγι της Σαμαριάς, ένα από τα μεγαλύτερα φαράγγια της Ευρώπης.",
    location: "Φαράγγι Σαμαριάς",
    position: [35.2982, 23.9651],
    image: "/path/to/samaria-image.jpg",
    link: "https://hikingexperience.gr/samaria",
  },
  {
    id: 6,
    title: "Κατάδυση στην Αλόννησο",
    description: "Εξερευνήστε το θαλάσσιο πάρκο της Αλοννήσου με καταδύσεις.",
    location: "Αλόννησος",
    position: [39.1456, 23.8605],
    image: "/path/to/alonnisos-image.jpg",
    link: "https://hikingexperience.gr/alonnisos",
  },
  {
    id: 7,
    title: "Ποδηλασία στη Νάξο",
    description: "Ανακαλύψτε την αγροτική πλευρά της Νάξου με ποδήλατο.",
    location: "Νάξος",
    position: [37.1031, 25.3766],
    image: "/path/to/naxos-image.jpg",
    link: "https://hikingexperience.gr/naxos",
  },
  {
    id: 8,
    title: "Ορειβασία στον Παρνασσό",
    description: "Εξερευνήστε τα μονοπάτια και τις κορυφές του Παρνασσού.",
    location: "Παρνασσός",
    position: [38.5333, 22.5833],
    image: "/path/to/parnassos-image.jpg",
    link: "https://hikingexperience.gr/parnassos",
  },
  {
    id: 9,
    title: "Πεζοπορία στον Ταΰγετο",
    description:
      "Απολαύστε την πανέμορφη διαδρομή μέχρι την κορυφή Προφήτης Ηλίας.",
    location: "Ταΰγετος",
    position: [36.9638, 22.3772],
    image: "/path/to/taygetos-image.jpg",
    link: "https://hikingexperience.gr/taygetos",
  },
  {
    id: 10,
    title: "Πεζοπορία στη Βάλια Κάλντα",
    description: "Εξερευνήστε το μαγευτικό Εθνικό Πάρκο της Πίνδου.",
    location: "Βάλια Κάλντα",
    position: [39.9391, 21.1379],
    image: "/path/to/valia-kalda-image.jpg",
    link: "https://hikingexperience.gr/valia-kalda",
  },
];
