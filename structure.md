# Structure
This readme has some topics which I endured during my experience as a developer. I'm going to place these values inside tangible information (I hope)

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
|   |   |   |   ├──index.ts
|   |   |   ├──index.ts
|   |   |   ├──router.tsx
|   |   |   ├──styles.ts
|   |   |   ├──types.d.ts
|   |   |   ├──tsconfig.json
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

# Provider-Context Design
When designing a context to be used as a provider, there is no need to placed them in separate files as this will just complicate things. They are to be used together!

```typescript
import { useState, useContext, createContext } from 'react';

const ThemeContext = createContext("light", () => "light");

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

 return (
   <ThemeContext.Provider value={{ theme, setTheme }}>
     {children}
   </ThemeContext.Provider>
 );
}

export { ThemeContext, ThemeProvider };
```

# Component Design

When designing a component, ask thyself:

- What does the component do?
- Does the component have its own state?
- Does the component has side-effects?
- Does the component expose methods and properties and how should I name them?
- How do users interact with the component?

Based on this questions, we can have everything which is necessary to design a good component.

We always need to define some types, so it is interesting to define a separate file types.d.ts which hold all the types that are used and linked in the component.

When designing the component, take a mental note that it should be "dumb". It should do one thing and one thing only. It is okay to hold a self-state (meaning that it is self-managing), but the state should not flow outside of its own container.

When thinking about side effects (React specific useEffect) do remember that this is problematic when working with bigger applications. After a while the syntax of useEffects will make you vomit on code itself, and when defining a good generic component, you should, by all means, avoid useEffects. Without them, your life will be more beautiful. Also, when you want to ship your component across multiorgans (SSR) useEffect and useState should be avoided at all costs since otherwise your component has to be written as a Client Side Component.

When thinking about exposing properties and methods, be sure to give them simple names. By no means should you create methods that contain business logical namings.

```typescript
return (
  <>
    <CellStructureValueChangedConfirmation
      confirmationTitle="Proceed"
      confirmationMessage="Are you sure you wish to proceed?"
      confirmationModalConfirmButtonMessage="Proceed"
      confirmationModalCancelButtonMessage="Cancel"
      handleConfirmationModalConfirmMessage={() => {
        modalstate.confirm();
        onProceed();
      }}
      onCancel={modalState.close}
    />
  </>
);
```

The previous code has some values which could easily be made into a more specific components so that a lot of business specific logic is abstracted and could be placed inside a more functional re-usable component. Also, long names will make code unreadable. 

Let's tackle this.

```typescript
// Modals/types.d.ts

interface DefaultModalProps {
  isOpen: boolean;
}

export interface ModalProps extends DefaultModalProps {
  title: string;
  message: string;
  onSuccess: () => void;
  onCancel: () => void;
  successMessage: string;
  cancelMessage: string;
}

export interface ProceedModalProps extends DefaultModalProps {
  title?: string;
  message?: string;
  onProceed: () => void;
  onCancel: () => void;
}

// /shared/components/Modal/Modal.tsx
const Modal = ({ isOpen, title, message, onSuccess, onCancel, successMessage, cancelMessage }: ModalProps) => {
  return (
    <modal open={isOpen}>
      <h2>{title}</h2>
      <p>{message}</p>
      <form>
        <button>{cancelMessage}</button>
        <button>{successMessage}</button>
      </form>
    </modal>
  );
}

// /featureA/components/ProceedModal/ProceedModal.tsx
import { Modal } from '@shared/components'
const ProceedModal = ({ isOpen, title = "Proceed?", message = "Are you sure you wish to proceed?", onProceed, onCancel }: ProceedModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      title={title}
      message={message}
      onSuccess={onProceed}
      onCancel={onCancel}
      successMessage="Proceed"
      cancelMessage="Cancel"
    />
  );
}

// inside a parent component
const [isOpen, open, close] = useModal();

const handleProceed = () => {
  close();
  cellStructureValueChanged();
}

return (
  <>
    <ProceedModal
      isOpen={modalState.isOpen()}
      onProceed={handleProceed}
      onCancel={close}
    />
  </>
);
```

In retrospect:

- We placed all types inside a generic types.d.ts file, neat!
- We correctly defined our methods that should be exposed
- We defined 2 components instead of one and split them according to the requesting feature.

