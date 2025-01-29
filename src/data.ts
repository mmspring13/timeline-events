import { Context } from "./components/timeline/types";

export const periods: Context["periods"] = [
  {
    key: "1",
    period: ["1987", "1991"],
    events: [
      {
        key: "1",
        title: "1987",
        content: "content 1",
      },
      {
        key: "2",
        title: "1989",
        content: "content 2",
      },
      {
        key: "3",
        title: "1990",
        content: "content 3",
      },
      {
        key: "4",
        title: "1991",
        content: "content 4",
      },
    ],
  },
  {
    key: "2",
    period: ["1992", "1996"],
    events: [
      {
        key: "1",
        title: "1992",
        content: "content 1",
      },
      {
        key: "2",
        title: "1993",
        content: "content 2",
      },
      {
        key: "3",
        title: "1996",
        content: "content 3",
      },
    ],
  },
  {
    key: "3",
    period: ["1998", "2002"],
    events: [
      {
        key: "1",
        title: "1998",
        content: "content 1",
      },
      {
        key: "2",
        title: "1999",
        content: "content 2",
      },
      {
        key: "3",
        title: "2000",
        content: "content 3",
      },
      {
        key: "4",
        title: "2001",
        content: "content 4",
      },
      {
        key: "5",
        title: "2002",
        content: "content 5",
      },
    ],
  },
];
