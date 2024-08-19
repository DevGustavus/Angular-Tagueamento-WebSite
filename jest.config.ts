import { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup.jest.ts'],
};

export default config;
