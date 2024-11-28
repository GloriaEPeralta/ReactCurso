module.exports = {
    //TODO:jsdom
    //preset: 'ts-jest',
    //testEnvironment: 'jsdom',
    //setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    testEnvironment: 'jest-environment-jsdom',
    setupFiles:['./jest.setup.js']
}