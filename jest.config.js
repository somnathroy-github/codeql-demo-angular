module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
      },
    },
    transform: {
      '^.+\\.(ts|js|html)$': 'jest-preset-angular',
    },
    moduleNameMapper: {
      '^@app/(.*)$': '<rootDir>/src/app/$1',
      '^@environments/(.*)$': '<rootDir>/src/environments/$1',
    },
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    coverageReporters: ['html'],
    collectCoverageFrom: [
      'src/**/*.ts',
      '!src/main.ts',
      '!src/polyfills.ts',
      '!src/**/*.module.ts',
      '!src/**/*.array.ts',
      '!src/**/*.model.ts',
      '!src/**/*.enum.ts',
      '!src/**/*.interface.ts',
      '!src/**/*.config.ts',
      '!src/**/*.mock.ts',
      '!src/**/*.spec.ts',
    ],
    coverageThreshold: {
      global: {
        branches: 40,
        functions: 40,
        lines: 40,
        statements: 40,
      },
    },
  };