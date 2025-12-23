import { pathsToModuleNameMapper } from "ts-jest";

import { compilerOptions } from "./tsconfig.json";

import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/modules/**/services/tests/*ts"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["clover", "json", "lcov", ["text", { skipFull: true }]],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts"],
};

export default config;
