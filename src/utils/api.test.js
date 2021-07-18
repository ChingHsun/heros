const { getHeroList } = require("./api.js");

describe("Test getHeroList", () => {
  test("Return Array", async () => {
    const heroes = await getHeroList();
    expect(Array.isArray(heroes)).toBe(true);
  });
});
