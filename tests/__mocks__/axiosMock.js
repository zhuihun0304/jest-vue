const mock = {
  getValue: jest.fn(() =>
    Promise.resolve({
      data: "value",
    })
  ),
};
export default mock;
