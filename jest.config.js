module.exports = {
  setupFilesAfterEnv: ["./client/src/setUpTests.js"],
  moduleDirectories: [
    "node_modules",
    // add the directory with the test-utils.js file, for example:
    "utils", // a utility folder
    __dirname + "/client/src", // the root directory
  ],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest"
  }
};
