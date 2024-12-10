# React Provider-Context Design
When designing a context to be used as a provider, there is no need to placed them in separate files as this will just create more files and possibly complicate things.

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

usage

```typescript

const ThemeComponent = () => {
  const { theme } = useContext(ThemeContext);

  return <SomeOtherLibrary theme={theme} />;
};

const myPage = () => {
  return (
    <ThemeProvider>
      <ThemeComponent />
    </ThemeProvider>
  );
};
```
