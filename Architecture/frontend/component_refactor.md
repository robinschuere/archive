# Component Refactor

In here is a small example on how to disect a component into a shared/component and a specific feature.

## The basics

When designing a component, ask thyself:

- What does the component do?
- Does the component have its own state?
- Does the component has side-effects?
- How do users interact with the component? Does the component expose methods and properties and how should I name them?

Based on this questions, we can have everything which is necessary to design a good component.

We always need to define some types, so it is interesting to define a separate file types.d.ts which hold all the types that are used in the component.

When designing the component, take a mental note that it should be "dumb". It should do one thing and one thing only. It is okay to hold a self-state (meaning that it is self-managing), but the state should not flow outside of its own container.

When thinking about side effects (React specific useEffect) do remember that this is problematic when working with bigger applications. After a while the syntax of useEffects will make you vomit on code itself, and when defining a good generic component, you should, by all means, avoid useEffects. Without them, your life will be more beautiful. Also, when you want to ship your component across multiple frameworks (SSR) useEffect and useState should be avoided at all costs since otherwise your component has to be written as a Client Side Component and is not useable as a  Server Side Component.

When thinking about exposing properties and methods, be sure to give them simple names. By no means should you create methods that contain business logical namings. This can be saved inside an application and will overal simplify the process.

## The example

We have a component in our repository that needs to be dissected into a feature. Part of the feature would be a shared component as it can be used on multiple levels.

```typescript
return (
  <>
    <CellStructureValueChangedConfirmationModal
      modalIsOpen={modalState.isOpen}
      confirmationTitle="Proceed"
      confirmationMessage="Are you sure you wish to proceed?"
      confirmationModalConfirmButtonMessage="Proceed"
      confirmationModalCancelButtonMessage="Cancel"
      handleConfirmationModalConfirmMessage={() => {
        modalstate.close();
        onProceed();
      }}
      onCancel={modalState.close}
    />
  </>
);
```

The previous code has a component which could easily be split into specific components so that a lot of business specific logic is abstracted and replaced. 

First, we define the code that we can reuse across applications and features. You guessed right: A Modal!

Let us think about different methods which a Modal should always have.

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
```

Now that we defined all our methods and properties, we can build the shared component

```typescript
// /shared/components/Modal/Modal.tsx
import { ModalProps } from './types';

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
```

Since we have a shared component, we can now structure a specific feature component around it. We do the same as before by defining the properties and methods that should be exposed. Because we now have a feature component, we can overrule specific properties from the shared component as these will be provided through the feature.

```typescript
// features/featureA/components/ProceedModal/types.d.ts
import { DefaultModalProps } from '@shared/components/Modals/types';

export interface ProceedModalProps extends DefaultModalProps {
  title?: string;
  message?: string;
  onProceed: () => void;
  onCancel: () => void;
}
```

We then create the feature component.

```typescript

// features/featureA/components/ProceedModal/ProceedModal.tsx
import { Modal } from '@shared/components';
import { ProceedModalProps } from './types';

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
```

We now have the feature available and can safely use it in an application.

```typescript
import { ProceedModal } from '@features/featureA';

const MyPage = () => {
  const [isOpen, open, close] = useModal();
  
  const handleProceed = () => {
    close();
    cellStructureValueChanged();
  }
  
  return (
    <>
      ...
      <ProceedModal
        isOpen={modalState.isOpen()}
        onProceed={handleProceed}
        onCancel={close}
      />
    </>
  );
};
```

## Decision

The above example, albeit very simple, gives an idea of how a component inside an application can be refactored in more robust components and features.
We learned how to split a component in a shared component and a feature
We learned how to correctly think about components. Making them dumb and re-usable.
