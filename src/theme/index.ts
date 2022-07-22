import { first } from "./first";
import { second } from "./second";
import { vanilla } from "./vanilla";

export type Theme = "vanilla" | "first" | "second";

export const themes: { [k in Theme]: any } = {
  vanilla,
  first,
  second,
};
