export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  roots: ["<rootDir>/src"], // Test source files in `src/`
  testMatch: ["<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}"], // Match all test files
};
