export const experience = [
  {
    title: "Random Studio",
    role: "Flash Developer",
    from: 2005,
    to: 2010,
    href: "http://random.studio",
  },
  {
    title: "Resn",
    role: "Senior Developer and Tech Lead",
    from: 2010,
    to: 2015,
    href: "http://resn.co.nz",
  },
  {
    title: "Collaborations with Grafik",
    role: "Freelance Senior Developer",
    from: 2020,
    to: 2022,
    href: "http://grafik.co.nz",
  },

  {
    title: "Touchtech / Springload",
    role: "Senior Developer and Tech Lead",
    from: 2015,
    to: 2021,
    href: "http://springload.co.nz",
  },

  {
    title: "Collaborations with Sons & Co",
    role: "Freelance Senior Developer",
    from: 2021,
    to: 2022,
    href: "http://sons.co.nz",
  },

  {
    title: "Altered State Machine",
    role: "Senior Developer and Tech Lead",
    from: 2022,
    to: 2023,
    href: "https://www.alteredstatemachine.xyz",
  },
  {
    title: "Gladeye",
    role: "Senior Developer",
    from: 2023,
    to: null,
    href: "https://www.gladeye.com",
  },
];

export const experienceSorted = [...experience].sort((a, b) => {
  // Ongoing positions (to is null) should be at the top
  if (a.to === null && b.to !== null) return -1;
  if (a.to !== null && b.to === null) return 1;

  // If both are ongoing, sort by from year descending
  if (a.to === null && b.to === null) {
    return b.from - a.from;
  }

  // Sort by to year descending (most recent first)
  // If to years are equal, sort by from year descending
  if (a.to !== null && b.to !== null) {
    if (b.to !== a.to) {
      return b.to - a.to;
    }
  }
  return b.from - a.from;
});
