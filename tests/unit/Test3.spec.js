const mockData = {
  data: {
    answer: "mock_yes",
    image: "mock.png",
  },
};
jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve(mockData)),
}));
import { shallowMount } from "@vue/test-utils";
import Test3 from "@/views/Test3";
import axios from "axios";
describe("Test for Test3 Component", () => {
  let wrapper;

  beforeEach(() => {
    axios.get.mockClear();
    wrapper = shallowMount(Test3);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  // 点击按钮后调用了 getAnswer 方法
  it("getAnswer Fn should be called", () => {
    const mockFn = jest.fn();
    wrapper.setMethods({ getAnswer: mockFn });
    wrapper.find("button").trigger("click");
    expect(mockFn).toBeCalled();
  });

  // 点击按钮后调用了axios.get方法
  it("axios.get Fn should be called", () => {
    const URL = "https://yesno.wtf/api";
    wrapper.find("button").trigger("click");
    expect(axios.get).toBeCalledWith(URL);
  });
});
