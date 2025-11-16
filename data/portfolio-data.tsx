export type PortfolioItemType = {
  title: string;
  with: string;
  for?: string;
  meta: {
    images?: { path: string; alt: string }[];
    year: number | string;
    type: string;
    awards: { title: string; link: string }[];
    link?: { label: string; url: string };
  };
};
export const projects: PortfolioItemType[] = [
  {
    title: "Never-ending why",
    for: "Placebo",
    with: "Random Studio",
    meta: {
      link: { label: "", url: "https://www.youtube.com/watch?v=3CUxVbcZdOg" },
      year: 2010,
      type: "interactive website & official video clip",
      awards: [
        {
          title: "FWA  - site of the day",
          link: "",
        },
      ],
    },
  },
  {
    title: "The Hall of Colonels",
    for: "KFC",
    with: "Resn",
    meta: {
      link: { label: "", url: "https://vimeo.com/153317193" },
      type: "Website",
      year: 2016,
      awards: [{ title: "FWA", link: "xx" }],
    },
  },

  {
    title: "He Tohu",
    for: "National Library",
    with: "Touchtech",
    meta: {
      link: { label: "", url: "https://www.springload.co.nz/work/he-tohu/" },
      type: "interactive installation",
      year: 2017,
      awards: [{ title: "Best Awards", link: "xx" }],
    },
  },
  // {
  //   title: "Portraits",
  //   for: "Te Papa",
  //   with: "Touchtech/Springload",
  //   meta: {
  //     link: {
  //       label: "",
  //       url: "https://www.springload.co.nz/work/te-papa-encounters/",
  //     },
  //     type: "interactive installation",
  //     year: 2018,
  //     awards: [{ title: "Best Awards", link: "xx" }],
  //   },
  // },
  {
    title: "Quake Nation",
    for: "Te Papa",
    with: "Springload",
    meta: {
      link: {
        label: "",
        url: "https://www.springload.co.nz/work/te-papa-quake-nation/",
      },
      type: "interactive installation",
      year: 2019,
      awards: [{ title: "Best Awards", link: "xx" }],
    },
  },

  // {
  //   title: "Touchless",
  //   with: "Springload",
  //   meta: {
  //     link: {
  //       label: "",
  //       url: "https://labs.springload.co.nz/post/touchless-museum-interaction",
  //     },
  //     type: "Proof of concept for touchless installations",
  //     year: 2020,
  //     awards: [],
  //   },
  // },
  {
    title: "Into the Amazon",
    for: "National Geographic",
    with: "Gladeye",
    meta: {
      link: {
        label: "",
        url: "https://www.nationalgeographic.com/into-the-amazon/",
      },
      type: "Accessible online form builder",
      year: 2024,
      awards: [],
    },
  },
  // {
  //   title: "Templar",
  //   with: "Gladeye",
  //   meta: {
  //     link: {
  //       label: "",
  //       url: "https://www.templarfi.org/",
  //     },
  //     type: "",
  //     year: 2025,
  //     awards: [],
  //   },
  // },
].reverse();
