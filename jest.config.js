module.exports = {
  testEnvironment: "node",
  preset: "ts-jest/presets/default-esm",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  collectCoverageFrom: ["src/**/*.ts"],
  testPathIgnorePatterns: ["/__fixtures__/", "/__utils__/"],
};
