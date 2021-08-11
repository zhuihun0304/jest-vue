import { shallowMount } from "@vue/test-utils";
import { fetchData } from "@/views/TestGet.js";
describe("异步获取数据", () => {
  it("真实接口获取数据", async () => {
    // const response = await fetchData();
    return fetchData().then((res) => {
      console.log(res.data);

      expect(res.data.retCode).toEqual("00000");
    });
  });
});
