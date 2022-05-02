module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['jest-extended'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'esbuild-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
