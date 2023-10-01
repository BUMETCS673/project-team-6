module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': ['ts-jest', {
      tsconfig: 'tsconfig.jest.json',  
    }],
  },
  modulePathIgnorePatterns: ['e2e']
};
