import { shallowMount } from "@vue/test-utils";
import { fetchData } from "@/views/TestGet.js";
describe("异步获取数据", () => {
  it("真实接口获取数据", async () => {
    // const response = await fetchData();
    return fetchData().then((res) => {
      for (let i = 0; i < res.data.retData.length; i++) {
        // 判断是否包含1这个数字
        // expect(res.data.retData[i].id).toContain(1);
        // 判断是否包含大于0
        expect(res.data.retData[i].id).toBeGreaterThanOrEqual(0);
      }
      // res.data.retData.array.forEach((element) => {
      //   expect(element.id).toEqual("25");
      // });
      console.log(res.data);
      // 返回的数据code是000000
      expect(res.data.retCode).toEqual("00000");
      // 返回的数组不包含null
      expect(res.data.retData).toEqual(expect.not.objectContaining(null));
    });
  });
});
