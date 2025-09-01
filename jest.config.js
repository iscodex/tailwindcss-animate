module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  collectCoverageFrom: [
    "src/**/*.ts",
    "dist/**/*.js",
    "!src/**/*.test.ts",
    "!dist/**/*.test.js",
  ],
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
  testTimeout: 10000,
  projects: [
    {
      displayName: "Tailwind v3",
      preset: "ts-jest",
      testMatch: ["<rootDir>/tests/v3/**/*.test.ts"],
      testEnvironment: "node",
    },
    {
      displayName: "Tailwind v4",
      preset: "ts-jest",
      testMatch: ["<rootDir>/tests/v4/**/*.test.ts"],
      testEnvironment: "node",
    },
  ],
};
