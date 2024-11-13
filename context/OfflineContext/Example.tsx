import { OfflineProvider } from './OfflineContext';

export default function App() {
  return (
    <OfflineProvider syncerInterval={2500}>
      <button>Add</button>
    </OfflineProvider>
  );
}
