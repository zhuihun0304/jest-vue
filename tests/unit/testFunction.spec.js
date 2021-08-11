import { sum } from "@/views/testFunction/testFunction";

describe("求和函数", () => {
  it("a + b", () => {
    //期望值
    expect(sum(1, 3)).toBe(4);
  });
});
