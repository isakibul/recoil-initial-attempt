import { selector } from "recoil";
import textState from "./atoms";

const charCounterState = selector({
  key: "charCounterState",
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export default charCounterState;
