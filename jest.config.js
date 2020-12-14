module.exports = {
  preset: 'ts-jest',
  "transform": {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest"
  },
  "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx"
  ]
};