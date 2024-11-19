import type { Config } from "@jest/types";

// Jest configuration
const config: Config.InitialOptions = {
  preset: "ts-jest", // Use ts-jest for TypeScript support
  testEnvironment: "jest-environment-jsdom", // Use jsdom for testing React components
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"], // Match test files
  moduleNameMapper: {
    // Handle module aliases (same as in tsconfig.json)
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Setup file for testing-library
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Recognize TypeScript extensions
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transform TypeScript files using ts-jest
  },
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json", // Use your project's tsconfig.json
    },
  },
  collectCoverage: true, // Enable coverage collection
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}", // Collect coverage only from source files
    "!src/**/*.d.ts", // Ignore type declaration files
    "!src/**/index.{ts,tsx}", // Ignore index files
  ],
  coverageDirectory: "<rootDir>/coverage", // Directory to store coverage reports
};

export default config;
