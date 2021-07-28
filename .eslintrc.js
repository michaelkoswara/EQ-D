module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    extends: [
      'plugin:react/recommended',
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      'plugin:prettier/recommended'
    ],
    plugins: [ 
        "@typescript-eslint"
    ],
    rules: {
        "react/prop-types": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "react/display-name":0
    }
}