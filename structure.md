# Structure
This readme has some topics which I endured during my experience as a developer. I'm going to place these values inside tangible information (I hope)

# Monorepo with feature folder setup

<details>
  <summary>/src</summary>
  <details>
    <summary>  /shared</summary>
    <details>
      <summary>    /api</summary>
    </details>
  </details>
  <details>
    <summary>  /features</summary>
  </details>
</details>

```bash
/src
  /shared
    /api
      /auth
        types.d.ts
        index
    /components
      /ComponentA
        ComponentA.styles.ts | css
        ComponentA.test.ts
        types.d.ts
        ComponentA.tsx
        index.ts
      index.ts
    /helpers
      /helperA
        helperA.ts
        helperA.test.ts
        index.ts
      index.ts
  /applications
    /someapp
      /pages
        /page
          index.ts
      router
      types.d.ts
      styles.ts
      index.ts
  /features
    /featureA
      /api
        /featureApi
          types.d.ts
          index.ts
      /components
        /FeatureComponent
          FeatureComponent.styles
          FeatureComponent.test
          FeatureComponent
          types.d.ts
          index.ts
      index.ts
package.json
package-lock.json
readme
```

## Pitfals
With every architectural setup come pitfals 

### Everything is a feature!
When everything is a feature, it is hard to define something that isn't. This also means that the boundaries of the features are clearly defined, but that means some boundaries are to hard and explicitly defined that everything has to be split into smaller feature components. This also means a lot of shared work will be redefined in the feature making the repository even bigger and after a while impossible to create shared components (unless a lot of time is invested)

### Every feature becomes a shared Component!
When boundaries are not hard enough or explicitly defined, it becomes clear that a lot of the features are bound to become shared. To counter this, features have to be clearly defined by their creators so that their use has a clear boundary and thus marking it as a feature.

# Component Design

When designing a component, ask thyself:

- What does the component do?
- Does the component have its own state?
- Does the component has side-effects?
- Does the component expose methods and properties and how should I name them?
- How do users interact with the component?

Based on this questions, we can have everything which is necessary to design a good component.

We always need to define some types, so it is interesting to define a separate file types.d.ts which hold all the types that are used and linked in the component.

When designing the component, take a mental note that it should be "dumb". It should do one thing and one thing only.

