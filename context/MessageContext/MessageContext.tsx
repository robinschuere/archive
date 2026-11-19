import { createContext } from 'react';
import { Toasts, ToastAction } from 'my-favorite-component-library-or-own-implementation';

const MessageContext = createContext(null);

type MessageType = 'info' | 'warning' | 'error' | 'success';

type MessageState = {
  type: MessageType;  // The type of message 
  title: string;
  message: string;
  actions?: ToastAction[];
}

const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const dispatchMessage = (message: MessageState) => {
    setMessages=(prev => [...prev, message]);
  }
  return (
    <MessageContext.Provider value={{ dispatchMessage }}>
      {children}
      <Toasts toasts={messages} />
    </MessageContext.Provider>
  );
}

const useMessageContext = () => {
  return useContext(MessageContext)
}

export default { MessageProvider, useMessageContext };
