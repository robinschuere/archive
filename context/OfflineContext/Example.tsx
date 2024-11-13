import { OfflineProvider } from './OfflineContext';
import { actions } from './actions';

export default function App() {
  
  return (
    <OfflineProvider actions={actions} syncerInterval={2500}>
      <button>Add</button>
    </OfflineProvider>
  );
}
