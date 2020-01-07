module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    protractor: true,
    jest: true,
    jasmine: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json", "./e2e/tsconfig.json"],
    sourceType: "module"
  },
  plugins: ["import", "@typescript-eslint", "filenames", "cucumber"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  rules: {
    "@typescript-eslint/camelcase": ["warn"],
    "@typescript-eslint/func-call-spacing": ["error", "never"],
    "@typescript-eslint/no-empty-function": [
      "error",
      { allow: ["arrowFunctions"] }
    ],
    "@typescript-eslint/no-useless-constructor": "error",
    "arrow-body-style": ["error", "as-needed"],
    "class-methods-use-this": "warn",
    complexity: ["warn", { max: 8 }],
    curly: "error",
    "default-case": "warn",
    eqeqeq: ["error", "always"],
    "filenames/match-exported": "error",
    "import/first": "error",
    "import/newline-after-import": ["error", { count: 1 }],
    "import/no-cycle": "warn",
    "import/extensions": "warn",
    "import/no-duplicates": ["error"],
    "import/order": ["error", { "newlines-between": "never" }],
    "linebreak-style": ["error", "unix"],
    "max-classes-per-file": "warn",
    "max-lines": ["warn", 1000],
    "max-params": ["warn", 6],
    "no-alert": "error",
    "no-confusing-arrow": "error",
    "no-console": ["error", { allow: ["error"] }],
    "no-delete-var": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": [
      "error",
      {
        ignore: [
          -1,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          20,
          25,
          100,
          200,
          201,
          202,
          204,
          207,
          400,
          401,
          404,
          500,
          1000,
          100000,
          1000000,
          10000000
        ]
      }
    ],
    "no-nested-ternary": "warn",
    "no-new-func": "error",
    "no-new": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-shadow": "error",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": "warn",
    "no-use-before-define": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "warn",
    "no-useless-rename": [
      "error",
      { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false }
    ],
    "no-useless-return": "error",
    "no-var": "error",
    "object-shorthand": [
      "warn",
      "always",
      { ignoreConstructors: false, avoidQuotes: true }
    ],
    "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
    "prefer-object-spread": "error",
    "prefer-const": "error",
    "prefer-template": "warn",
    "prefer-destructuring": ["warn", { object: true, array: false }],
    "prefer-regex-literals": "error",
    quotes: "off",
    "rest-spread-spacing": "warn",
    "template-curly-spacing": "error",
    yoda: "error"
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    },
    {
      files: ["environment*.ts"],
      rules: {
        "@typescript-eslint/camelcase": ["off"]
      }
    },
    {
      files: ["protractor.conf.js"],
      rules: {
        "@typescript-eslint/no-empty-function": ["off"]
      }
    },
    {
      files: ["*.spec.ts", "**/e2e/**/*.js"],
      rules: {
        "no-magic-numbers": "off",
        "no-unused-expressions": "off"
      }
    }
  ]
};
