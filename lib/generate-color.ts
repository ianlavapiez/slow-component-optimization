import shuffle from "lodash.shuffle";
import { block } from "./sleep";

const hex = "0123456789ABCDEF".split("");

export const generateColor = (): string => {
  // Delay to simulate blocking
  block(150);

  return Array.from({ length: 6 }, () => shuffle(hex)[0]).join("");
};
