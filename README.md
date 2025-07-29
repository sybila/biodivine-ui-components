# biodivine-ui-components

### Developer instructions

Currently, the project has several integrity checks that are enforced by the CI/CD pipeline. To run them locally, use the prepared NPM scripts:

#### Analysis

Check (or check and fix) code formatting using pre-defined rules:

```
npm run format
npm run format:fix
```

Check that all Typescript files are well-typed:

```
npm run typecheck
```

Check that there are no lint violations (or try to fix those that can be resolved automatically):

```
npm run lint
npm run lint:fix
```

#### Usage

To actually work with the provided components, we use `storybook`. To start an interactive session, use:

```
npm run storybook
``` 

To build a static, deployable version of the storybook environment, use:

```
npm run storybook:build
```

#### Minor notes

Currently, `skipLibCheck` is enabled due to [this issue](https://github.com/withastro/astro/issues/5061). Not sure if this ever gets resolved, so for now we are stuck with this setting.