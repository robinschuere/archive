# Component Design

When designing a component, ask thyself:

- What does the component do?
- Does the component have its own state?
- Does the component has side-effects?
- How do users interact with the component? Does the component expose methods and properties and how should I name them?

Based on this questions, we can have everything which is necessary to design a good component.

We always need to define some types, so it is interesting to define a separate file types.d.ts which hold all the types that are used in the component.

When designing the component, take a mental note that it should be "dumb". It should do one thing and one thing only. It is okay to hold a self-state (meaning that it is self-managing), but the state should not flow outside of its own container.

When thinking about side effects (React specific useEffect) do remember that this is problematic when working with bigger applications. After a while the syntax of useEffects will make you vomit on code itself, and when defining a good generic component, you should, by all means, avoid useEffects. Without them, your life will be more beautiful. Also, when you want to ship your component across multiple frameworks (SSR) useEffect and useState should be avoided at all costs since otherwise your component has to be written as a Client Side Component and is not useable as a  Server Side Component.

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

The previous code has a component which could easily be split into specific components so that a lot of business specific logic is abstracted and replaced. 

Let's tackle this.

```typescript
// shared/components/Modals/types.d.ts

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

// features/featureA/components/ProceedModal/types.d.ts
import { DefaultModalProps } from '@shared/components/Modals/types';

export interface ProceedModalProps extends DefaultModalProps {
  title?: string;
  message?: string;
  onProceed: () => void;
  onCancel: () => void;
}

// features/featureA/components/ProceedModal/ProceedModal.tsx
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

- We placed all shared modal types inside a generic types.d.ts file, neat!
- We correctly defined our methods that should be exposed.
- We defined 2 components instead of one and split them according to the requesting feature.

