# Structure
This readme has some topics which I endured during my experience as a developer. I'm going to place these values inside tangible information (I hope)

# Monorepo with feature folder setup

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

When designing the component, take a mental note that it should be "dumb". It should do one thing and one thing only. It is okay to hold a self-state (meaning that it is self-managing), but the state should not flow outside of its own container.

When thinking about side effects (React specific useEffect) do remember that this is problematic when working with bigger applications. After a while the syntax of useEffects will make you vomit on code itself, and when defining a good generic component, you should, by all means, avoid useEffects. Without them, your life will be more beautiful. Also, when you want to ship your component across multiorgans (SSR) useEffect and useState should be avoided at all costs since otherwise your component has to be written as a Client Side Component.

When thinking about exposing properties and methods, be sure to give them simple names. By no means should you create methods that contain business logical namings

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
  message: string;
}

export interface ModalProps extends DefaultModalProps {
  title: string;
  onSuccess: () => void;
  onCancel: () => void;
  successMessage: string;
  cancelMessage: string;
}

export interface ProceedModalProps extends DefaultModalProps {
  onProceed: () => void;
  onCancel: () => void;
}

// Modals/Modal.tsx
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

//Modal/ProceedModal.tsx
const ProceedModal = ({ isOpen, message, onProceed, onCancel }: ProceedModalProps) => {
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
const [isOpen, close] = useModal();

const handleProceed = () => {
  close();
  cellStructureValueChanged();
}

return (
  <>
    <ProceedModal
      isOpen={modalState.isOpen()}
      message="Are you sure you wish to proceed?"
      onProceed={handleProceed}
      onCancel={close}
    />
  </>
);
```
