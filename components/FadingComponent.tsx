import { useState, useEffect, PropsWithChildren } from 'react';

interface FadingComponentProps {
  /* Should the component be visible */
  visible: boolean;
  /* Defines how long the component should be visible in ms */
  time: number;
  /* The event that bubbles whenever the component will stop being showed */
  onChange?: () => void;
}

const FadingComponent = (Component: JSX.Element) => ({ visible, time, onChange, children }: PropsWithChildren<FadingComponentProps>) => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setShowComponent(visible)
    let timeoutId = null;
    if (visible) {
      timeoutId = setTimeout(() => {
        setShowComponent(false)
        if (onChange) {
          onChange();
        }
      }, time);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  },[visible, time]);

  return showComponent ? children : null;
}

export default FadingComponent;
