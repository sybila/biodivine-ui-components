import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import storybook from 'eslint-plugin-storybook';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: globals.browser } },
  importPlugin.flatConfigs.recommended,
  tseslint.configs.recommended,
  storybook.configs['flat/recommended'],  
  eslintConfigPrettier,  
]);
