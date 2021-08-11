// const path = require("path");
module.exports = {
  // rootDir: path.resolve(__dirname, "../../"),
  // 模块使用的文件扩展名
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  // 转变，转换器是提供同步功能以转换源文件的模块。
  // 用 `vue-jest` 处理 `*.vue` 文件
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // 快照序列化器，快照可以查看html
  snapshotSerializers: ["jest-serializer-vue"],
  // 匹配的测试用例目前区域
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)",
  ],
  // 这两个是覆盖率写法
  collectCoverage: true,
  collectCoverageFrom: [
    "src/utils/**/*.{js,vue}",
    "!src/utils/auth.js",
    "!src/utils/request.js",
    "src/components/**/*.{js,vue}",
  ],
  // Jest输出覆盖信息文件的目录。
  coverageDirectory: "<rootDir>/tests/unit/coverage",
  transformIgnorePatterns: ["/node_modules/"],
  testURL: "http://localhost/",
  preset: "@vue/cli-plugin-unit-jest",
};
