# Monorepo with feature folder setup

Some thoughts about a specific structure regarding a monorepo with

- applications
- features
- shared components
- exposed packages

```bash
├──src
|   ├──applications
|   |   ├──applicationA
|   |   |   ├──pages
|   |   |   |   ├──pageA
|   |   |   |   |   |   ├──hooks
|   |   |   |   |   ├──index.tsx
|   |   |   |   ├──pageB
|   |   |   |   |   |   ├──hooks
|   |   |   |   |   ├──index.tsx
|   |   |   |   ├──router.tsx
|   |   |   ├──config
|   |   |   |   ├──config.ts
|   |   |   |   ├──featureFlags.ts
|   |   |   ├──index.ts
|   |   |   ├──package.json
|   |   |   ├──package-lock.json
|   |   |   ├──styles.ts
|   |   |   ├──types.d.ts
|   |   |   ├──tsconfig.json
|   |   |   ├──pipeline
|   |   |   ├──.env
|   ├──features
|   |   ├──components
|   |   |   ├──FeatureComponent
|   |   |   |   ├──FeatureComponent.styles
|   |   |   |   ├──FeatureComponent.test
|   |   |   |   ├──FeatureComponent
|   |   |   |   ├──types.d.ts
|   |   |   |   ├──index.ts
|   |   |   ├──index.ts
|   |   ├──context
|   |   |   ├──contextA
|   |   |   |   ├──contextA.tsx
|   |   ├──hooks
|   |   |   ├──featureHookA
|   |   |   |   ├──featureHookA.ts
|   |   |   |   ├──featureHookA.test.ts
|   |   |   |   ├──index.ts
|   |   |   ├──index.ts
|   |   ├──services
|   |   |   ├──featureServiceA
|   |   |   |   ├──featureServiceA
|   |   |   |   ├──types.d.ts
|   |   |   |   ├──index.ts
|   |   ├──utils
|   |   |   ├──featureUtilA
|   |   |   |   ├──featureUtilA.ts
|   |   |   |   ├──featureUtilA.test.ts
|   |   |   |   ├──index.ts
|   |   |   ├──index.ts
|   |   ├──index.ts
|   |   ├──package.json
|   |   ├──package-lock.json
|   |   ├──styles.ts
|   |   ├──types.d.ts
|   |   ├──tsconfig.json
|   ├──packages
|   |   ├──packageA
|   |   |   ├──components
|   |   |   |   ├──ComponentA
|   |   |   |   |   ├──ComponentA.styles.ts | css
|   |   |   |   |   ├──ComponentA.test.ts
|   |   |   |   |   ├──types.d.ts
|   |   |   |   |   ├──ComponentA.tsx
|   |   |   |   |   ├──index.ts
|   |   |   |   ├──index.ts
|   |   |   ├──context
|   |   |   |   ├──contextA
|   |   |   |   |   ├──contextA.tsx
|   |   |   ├──hooks
|   |   |   |   ├──hookA
|   |   |   |   |   ├──hookA.ts
|   |   |   |   |   ├──hookA.test.ts
|   |   |   |   |   ├──index.ts
|   |   |   |   ├──index.ts
|   |   |   ├──services
|   |   |   |   ├──auth
|   |   |   |   |   ├──types.d.ts
|   |   |   |   |   ├──index
|   |   |   ├──utils
|   |   |   |   ├──utilA
|   |   |   |   |   ├──utilA.ts
|   |   |   |   |   ├──utilA.test.ts
|   |   |   |   |   ├──index.ts
|   |   |   |   ├──index.ts
|   |   |   ├──index.ts
|   |   |   ├──pipeline
|   |   |   ├──package.json
|   |   |   ├──package-lock.json
|   |   |   ├──styles.ts
|   |   |   ├──types.d.ts
|   |   |   ├──tsconfig.json
|   ├──shared
|   |   ├──components
|   |   |   ├──ComponentA
|   |   |   |   ├──mappers
|   |   |   |   |   ├──index.ts
|   |   |   |   ├──helpers
|   |   |   |   |   ├──checkComponentMinimalRequirements.ts
|   |   |   |   |   ├──index.ts
|   |   |   |   ├──ComponentA.styles.ts | css
|   |   |   |   ├──ComponentA.test.ts
|   |   |   |   ├──types|interfaces.d.ts
|   |   |   |   ├──ComponentA.tsx
|   |   |   |   ├──EmptyState.tsx
|   |   |   |   ├──index.ts
|   |   |   ├──index.ts
|   |   ├──context
|   |   |   ├──UseContextA
|   |   |   |   ├──useContextA.ts
|   |   |   |   ├──useContextA.test.ts
|   |   |   |   ├──types|interfaces.d.ts
|   |   |   |   ├──index.ts
|   |   ├──hooks
|   |   |   ├──UseHookA
|   |   |   |   ├──useHookA.ts
|   |   |   |   ├──useHookA.test.ts
|   |   |   |   ├──types|interfaces.d.ts
|   |   |   |   ├──index.ts
|   |   |   ├──index.ts
|   |   ├──services
|   |   |   ├──auth
|   |   |   |   ├──auth.test.ts
|   |   |   |   ├──types|interfaces.d.ts
|   |   |   |   ├──index
|   |   ├──utils
|   |   |   ├──utilA
|   |   |   |   ├──utilA.ts
|   |   |   |   ├──utilA.test.ts
|   |   |   |   ├──types|interfaces.d.ts
|   |   |   |   ├──index.ts
|   |   |   ├──index.ts
|   |   ├──index.ts
|   |   ├──package.json
|   |   ├──package-lock.json
|   |   ├──styles.ts
|   |   ├──types.d.ts
|   |   ├──tsconfig.json
├──featureFlags.json
├──package.json
├──package-lock.json
├──tsconfig.base.json
├──readme
├──eslintrc.json
├──gitignore
```

## The main Idea

### Shared folder

A shared folder holds all information that operates on a very basic level which developers can use to build applications and features. It is important to note here that all logical assumptions in the shared library should be that the service, util or component are unit-testable and can be regarded as "dumb" functions so that an easy approach is available for the developer.

The shared library could be deployed as a whole package (be it private or NPM) since it should not be depending on other parts of code. However, we do not want to expose parts of the monorepo code structure.

Shared can import from (private or NPM) packages and the shared folders.

#### Components

Shared components are components which are to be used inside pages and features. These components have to be as "dumb" as possible.

The shared components will get some hard requirements:

- Components are (almost) always dumb and do not keep state or side-effects inside. They should be as controllable as possible.
- Components have a seperate styles file to keep all their styles in.
- Components have an EmptyState Component which will be returned when the minimal requirements of that component were not met (see helpers/checkComponentMinimalRequirements.ts).
- Components have interfaces|types (props) which are clearly stated inside the interfaces|types.d.ts file
- Components have a minimal test setup where the component is tested for specific behaviours
- An index file is returned which acts as an entry point for exporting types, styles and the component.

```typescript
export type { ComponentAProps } from './types|interfaces.d.ts';

export { checkComponentMinimalRequirements } from './helpers/checkComponentMinimalRequirements';

import ComponentA from './ComponentA';
import EmptyState from './EmptyState';

export const ComponentA;
export const ComponentAEmptyState = EmptyStatec;

export default ComponentA (props: ComponentAProps) => {
  if (checkComponentMinimalRequirements(props)) {
    return <ComponentA {...props} />
  }
  return <EmptyState />
}
```

#### Contexts 

Shared contexts are contexts which are to be used inside pages and features. 

The shared contexts will get some hard requirements:

- Contexts will throw assertion errors whenever issues arise.
- Contexts have interfaces|types (props) which are clearly stated inside the interfaces|types.d.ts file
- Contexts have a minimal test setup where the context is tested
- An index file is returned which acts as an entry point for exporting types and the context.

```typescript
export type { UseContextAProps } from './types|interfaces.d.ts';

export useContextA from './useContextA';
```

#### Hooks 

Shared hooks are hooks which are to be used inside pages and features. 

The shared hooks will get some hard requirements:

- Hooks will throw assertion errors whenever issues arise.
- Hooks have interfaces|types (props) which are clearly stated inside the interfaces|types.d.ts file
- Hooks have a minimal test setup where the hook is tested
- An index file is returned which acts as an entry point for exporting types and the hook.

```typescript
export type { UseHookAProps } from './types|interfaces.d.ts';

export useHookA from './useHookA';
```

#### Services

Shared services are services which are to be used inside pages and features.

Services are functionalities which will help linking components and data together. They act as a bridge to get everything running smoothly. Services may look like:

- api client
- specific managers

### Features folder

A feature is a component that operates in its own boundary which developers can use. A feature is more complex then a shared component as it ties logic and specific components together. It can be as big as a complete page view

A feature cannot be deployed as a whole package (be it private or NPM) since it is depending on monorepo code.

Features can import from (private or NPM) packages, shared and feature folders.

### Packages folder

A package is a component / service that operates in its own boundary which developers can use as a (private or NPM) package.

A package should have all information to be self-maintaining (api/components).

Packages can be exposed to the outside world as a (private or NPM) package thus it may not depend on code that is not in the package specific folder. 

Packages can import from other (private or NPM) packages. The amount of dependencies should remain at a low amount to easily maintain the package.

### Applications folder

An application is a website / webapplication / mobile application where end-users communicate with.

Applications are deployable by their own standards, to their own environments whenever necessary. Application hold their own package json.

Applications can import from (private or NPM) packages, shared and feature folders.

## Pitfals
With every architectural setup come pitfals 

### Everything is a feature!
When everything is a feature, it is hard to define something that isn't. This also means that the boundaries of the features are clearly defined, but that means some boundaries are to hard and explicitly defined that everything has to be split into smaller feature components. This also means a lot of shared work will be redefined in the feature making the repository even bigger and after a while impossible to create shared components (unless a lot of time is invested)

### Every feature becomes a shared Component!
When boundaries are not hard enough or explicitly defined, it becomes clear that a lot of the features are bound to become shared. To counter this, features have to be clearly defined by their creators so that their use has a clear boundary and thus marking it as a feature.

### Packages cannot be created due to dependencies
It is hard to create a specific package since it has dependencies on a feature or shared component. It is of utmost importance to make packages as small as possible and to not depend on other monorepo code.

## Feature flags
Depending on the mono repo context, some different featureflags are in place to keep everything running correctly.

### What is a feature flag
A feature flag is a config object value that an application uses to show specific content. It can be that a specific application has some features implemented, but they are not visible yet due to the state of implementation, or state of the application itself.

To counter this, a main file with all feature should be available at root level

```javascript
// array model:
const FeatureFlags = {
  NAME: [NAME, DESCRIPTION],
}

// object model:
const FeatureFlags = {
  NAME: {
    name: 'NAME',
    description: '',
  },
}

export default FeatureFlags
```

Applications should then import the specific featureflags in a common context so that each feature depending on these values can request them when necessary.
