import isInputStrong from "./isInputStrong";

test("testing if input contains certain values", () => {
  expect(isInputStrong("qwerty")).toStrictEqual(false);
  expect(isInputStrong("QWERTYk$")).toStrictEqual(true);
});
