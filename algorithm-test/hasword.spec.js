import { hasWord } from "./hasword";

test("return true if the argument is found in the array", () => {
  expect(hasWord("the")).toBe(true);
});

test("Should return false if the argument is not found in the array", () => {
  expect(hasWord("thetr")).toBe(false);
});
