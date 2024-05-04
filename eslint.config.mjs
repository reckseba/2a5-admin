import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
    {
        languageOptions: { globals: globals.browser }
    },{
        "rules": {
            "semi": ["error", "always"],
            "quotes": ["error", "double"],
            "indent": ["error", 4]
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];