module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "no-plusplus": [
      "warn",
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "prefer-template": "warn",
    "prefer-const": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-destructuring": [
      "warn",
      {
        "array": true,
        "object": true
      }
    ],
    "curly": "warn",
    "quotes": [
      "warn",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "object-shorthand": "warn",
    "eqeqeq": "warn",
    "no-var": "warn",
    "no-duplicate-imports": "warn",
    "keyword-spacing": "warn",
    "no-console": [
      "warn",
      {
        "allow": [
          "warn",
          "error"
        ]
      }
    ],
    "no-extra-boolean-cast": "warn",
    "no-extra-semi": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-useless-escape": "off",
  }
};