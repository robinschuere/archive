# Monorepo with feature folder setup

```bash
├──src
|   ├──applications
|   |   ├──applicationA
|   |   |   ├──pages
|   |   |   |   ├──pageA
|   |   |   |   |   ├──pageA.tsx
|   |   |   |   ├──pageB
|   |   |   |   |   ├──pageB.tsx
|   |   |   |   ├──router.tsx
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
|   |   |   |   ├──ComponentA.styles.ts | css
|   |   |   |   ├──ComponentA.test.ts
|   |   |   |   ├──types.d.ts
|   |   |   |   ├──ComponentA.tsx
|   |   |   |   ├──index.ts
|   |   |   ├──index.ts
|   |   ├──context
|   |   |   ├──contextA
|   |   |   |   ├──contextA.tsx
|   |   ├──hooks
|   |   |   ├──hookA
|   |   |   |   ├──hookA.ts
|   |   |   |   ├──hookA.test.ts
|   |   |   |   ├──index.ts
|   |   |   ├──index.ts
|   |   ├──services
|   |   |   ├──auth
|   |   |   |   ├──types.d.ts
|   |   |   |   ├──index
|   |   ├──utils
|   |   |   ├──utilA
|   |   |   |   ├──utilA.ts
|   |   |   |   ├──utilA.test.ts
|   |   |   |   ├──index.ts
|   |   |   ├──index.ts
|   |   ├──index.ts
|   |   ├──package.json
|   |   ├──package-lock.json
|   |   ├──styles.ts
|   |   ├──types.d.ts
|   |   ├──tsconfig.json
├──package.json
├──package-lock.json
├──tsconfig.base.json
├──readme
├──eslintrc.json
├──gitignore
```

## Pitfals
With every architectural setup come pitfals 

### Everything is a feature!
When everything is a feature, it is hard to define something that isn't. This also means that the boundaries of the features are clearly defined, but that means some boundaries are to hard and explicitly defined that everything has to be split into smaller feature components. This also means a lot of shared work will be redefined in the feature making the repository even bigger and after a while impossible to create shared components (unless a lot of time is invested)

### Every feature becomes a shared Component!
When boundaries are not hard enough or explicitly defined, it becomes clear that a lot of the features are bound to become shared. To counter this, features have to be clearly defined by their creators so that their use has a clear boundary and thus marking it as a feature.

## The main Idea

### Applications

An application is a website / webapplication / mobile application where end-users communicate with.

Applications are deployable by their own standards, to their own environments whenever necessary. Application hold their own package json.

Applications can import from (private or NPM) packages, shared and feature folders as they should be easily deployable.

### Features

A feature is a component / service that operates in its own boundary which developers can use.

A feature can have all information to be self-maintaining (api/components) but the preferred option is a service feature or a component feature. Linking both should happen through an application!

Features cannot be deployed as a (private or NPM) package since it is depending on monorepo code.

Features can import from (private or NPM) packages and the shared monorepo as they are used by the Applications.

### Packages

A package is a component / service that operates in its own boundary which developers can use as a (private or NPM) package.

A package should have all information to be self-maintaining (api/components) but the preferred option is a service package or a component package. Linking both should happen through an application or feature or shared component!

Packages can be exposed to the outside world as a (private or NPM) package thus it may not depend on code that is not in the package specific folder. All used code should be in the package!

Packages can import from other (private or NPM) packages. The amount of dependencies should remain at a low amount to easily maintain the package.

### Shared

A shared library holds all information that operates on a very basic level which developers can use to build applications and features. It is important to note here that all logical assumptions in the shared library should be that the service, util or component are unit-testable and can be regarded as "dumb" functions so that an easy approach is available for the developer.

The shared library could be deployed as a whole package (be it private or NPM) since it should not be dependant of other parts of code. However, we do not want to expose parts of our code structure.

Shared can import from (private or NPM) packages as they are used by the Applications and Features.
