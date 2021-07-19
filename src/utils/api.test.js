import { getHeroList, getHeroProfile, updateHeroProfile } from "./api.js";
const moxios = require("moxios");
jest.useFakeTimers();

describe("test getHeroList", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("getHeroList is returned", () => {
    moxios.wait(() => {
      moxios.stubRequest("/test", {
        status: 200,
        response: "test",
      });
      return getHeroList().then((list) => {
        expect(list).toBe("test");
      });
    });
  });
});

describe("test getHeroProfile", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("getHeroProfile is returned", () => {
    moxios.wait(() => {
      moxios.stubRequest("/test", {
        status: 200,
        response: "test",
      });
      return getHeroProfile().then((profile) => {
        expect(profile).toBe("test");
      });
    });
  });
});
describe("test updateHeroProfile", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("updateHeroProfile is returned", () => {
    moxios.wait(() => {
      moxios.stubRequest("/test", {
        status: 200,
        response: "test",
      });
      return updateHeroProfile().then((profile) => {
        expect(profile).toBe("test");
      });
    });
  });
});
