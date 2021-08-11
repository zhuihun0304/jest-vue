import { shallowMount } from "@vue/test-utils";
import Counter from "@/views/NewCounter.vue";
import sinon from "sinon";

describe("NewCounter文件", () => {
  it("触发了click事件", () => {
    // const change = sinon.spy();
    // 页面挂载
    // const wrapper = shallowMount(Counter, {
    //   listeners: {
    //     change,
    //   },
    // });
    const wrapper = shallowMount(Counter);
    const button = wrapper.find("button");
    button.trigger("click");
    // await Vue.nextTick();s
    expect(wrapper.vm.count).toBe(1);
    // expect(change.called).toBe(true);
    button.trigger("click");
    expect(wrapper.vm.count).toBe(2);
    button.trigger("click");
    expect(wrapper.vm.count).toBe(4);
  });
});
