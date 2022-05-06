module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'esbuild-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
