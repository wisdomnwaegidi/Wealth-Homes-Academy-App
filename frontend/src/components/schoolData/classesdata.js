import {
  classesDetails,
  classesDetailsOne,
  classesDetailsTwo,
} from "./classesDetails";

export const classesHeader = [
  {
    id: 1,
    text: "See All",
    url: "/Seeall",
    detail: classesDetails,
  },
  {
    id: 2,
    text: "Trending",
    url: "/Trending",
    detail: classesDetailsOne,
  },
  {
    id: 3,
    text: "Popularity",
    url: "/Popularity",
    detail: classesDetailsTwo,
  },
  {
    id: 4,
    text: "Featured",
    url: "/Featured",
    detail: classesDetailsTwo,
  },
];

// console.log(classesDetails);
