import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
  const [online, setOnline] = useState<boolean>(window.navigator.onLine);

  useEffect(() => {
    const handleStatusChange = () => {
      setOnline(window.navigator.onLine);
    };
    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, []);

  return online;
};
