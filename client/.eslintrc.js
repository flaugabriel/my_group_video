module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
      },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2020
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off"
      }
    }
