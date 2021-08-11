import { mount, shallowMount, shallow } from "@vue/test-utils";
import Dom from "@/views/testDom/Dom.vue";
import TestDom from "@/views/testDom/TestDom.vue";

import flushPromises from "flush-promises";

describe("Dom.vue", () => {
  let wrapper, vm;
  // 测试代码运行前的操作
  beforeEach(() => {
    const message = ["Cat"];
    wrapper = mount(Dom);
    vm = wrapper.vm;
    wrapper.setData({ messages: message });
  });
  //传参测试，按照官网没反应
  it('equals messages to ["Cat"]', async () => {
    // await wrapper.setProps({ messages: ["Cat"] });
    // await flushPromises();
    console.log(wrapper.html(), vm.messages);
    expect(vm.messages).toEqual(["Cat"]);
  });
  // 为App的单元测试增加快照（snapshot）：比较dom差异
  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
  // Dom渲染测试
  // it("Dom组件渲染是否完成", () => {
  //   // 使用Vue组件选择器
  //   expect(wrapper.is(TestDom)).toBe(true);
  //   // 使用CSS选择器
  //   expect(wrapper.is(".outer")).toBe(true);
  //   // 使用CSS选择器
  //   expect(wrapper.contains("p")).toBe(true);
  // });
  // props：返回 Wrapper vm 的 props 对象。

  // it("接收到了bye作为Props", () => {
  //   wrapper = shallowMount(TestDom, {
  //     propsData: {
  //       messages: ["bye"],
  //     },
  //   });
  //   expect(wrapper.props("messages")).toContain("bye");
  // });
  // describe("SubmitButton.vue", () => {
  //   it("displays a non authorized message", () => {
  //     const msg = "submit";
  //     const message = ["bye", "Hello Jest"];
  //     const wrapper = shallowMount(TestDom, {
  //       propsData: {
  //         msg: msg,
  //         message: message,
  //       },
  //     });

  //     console.log(wrapper.html());
  //     expect(wrapper.find("span").text()).toBe("Not Authorized");
  //     expect(wrapper.find("button").text()).toBe("submit");
  //     expect(wrapper.props("message")).toContain("bye");
  //   });
  // });
});
