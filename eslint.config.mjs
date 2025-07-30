import js from "@eslint/js";
import tseslint from "typescript-eslint";
import storybook from 'eslint-plugin-storybook';
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";


export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  storybook.configs['flat/recommended'],  
  eslintConfigPrettier,  
]);
