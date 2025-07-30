# biodivine-ui-components

## Developer instructions

Currently, the project has several integrity checks that are enforced by the CI/CD pipeline. To run them locally, use the prepared NPM scripts:

#### Analysis

Check (or check and fix) code formatting using pre-defined rules:

```bash
npm run format
npm run format:fix
```

Check that all Typescript files are well-typed:

```bash
npm run typecheck
```

Check that there are no lint violations (or try to fix those that can be resolved automatically):

```bash
npm run lint
npm run lint:fix
```

#### Tests

We support unit tests using `vitest`:

```bash
npm run test
```

And we also support storybook tests using `playwright` (you may need to run `npx playwright install` to initialize `playwright` before the first test execution):

```bash
npm run storybook:test
```

#### Usage

To actually work with the provided components, we use `storybook`. To start an interactive session, use:

```bash
npm run storybook
``` 

To build a static, deployable version of the storybook environment, use:

```bash
npm run storybook:build
```

**After each commit, the result of `storybook:build` is deployed to github pages at `https://sybila.github.io/biodivine-ui-components/$BRANCH_NAME`. This way, you can explore the current state of the project or share it with someone externally.**

#### Minor notes

Currently, `skipLibCheck` is enabled in `tsconfig.json` due to [this issue](https://github.com/withastro/astro/issues/5061). Not sure if this ever gets resolved, so for now we are stuck with this setting.