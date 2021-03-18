module.exports = {
    // if you're also using typescript
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
    // registers babel.config.js with jest
    transform: {
      "^.+\\.js$": "babel-jest",
    },
    "moduleNameMapper": {
      "@fluentui/react/lib/(.*)$": "@fluentui/react/lib-commonjs/$1"
    },
    // explicitly include any node libs using ESM modules
    transformIgnorePatterns: ["node_modules/?!(@fluentui)","dist"],
    testPathIgnorePatterns: ["node_modules","dist"],
  }