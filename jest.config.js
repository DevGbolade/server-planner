module.exports = {
  testEnvironment: "node",
  clearMocks: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.js"],
  coveragePathIgnorePatterns: [
    "node_modules",
    "coverage",
    "src/utils/responses.js",
    "src/utils/schema.js",
    "src/models",
  ],
  verbose: true,
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
