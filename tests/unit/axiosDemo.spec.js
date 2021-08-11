import { shallowMount } from "@vue/test-utils";
import axiosDemo from "@/views/axiosDemo/axiosDemo.vue";
import flushPromises from "flush-promises";
import axios from "axios";

describe("异步获取数据", () => {
  // 按照官网的方案1，实验之后不好使
  // jest.mock("axios", () => ({
  //   get: Promise.resolve("value"),
  // }));
  // it("fetches async when a button is clicked", (done) => {
  //   const wrapper = shallowMount(axiosDemo);
  //   wrapper.find("button").trigger("click");
  //   // 确保页面渲染完成之后开始进入取值
  //   wrapper.vm.$nextTick(() => {
  //     expect(wrapper.text()).toBe("value");
  //     done();
  //   });
  // });
  // 按照官网的方案2，测试好使
  jest.mock("axios");
  it("点击按钮获取数据，渲染到页面上", async () => {
    const wrapper = shallowMount(axiosDemo);
    wrapper.find("button").trigger("click");
    // 确保页面渲染完成之后开始进入取值
    await flushPromises();
    expect(wrapper.text()).toBe("value");
  });
});
