import { OfflineProvider } from './OfflineContext';
import { actions } from './actions';

const ChildComponent = () => {
  const { dispatch } = useOfflineContext();
  const [formValues, setFormValues] = useState({ name: '' });
  
  const handleSave = () => {
    dispatch({ type: 'add', data: { id: undefined, params: [{...formValues}], contextValue: 'todo', contextAction: 'insert' });
    setFormValues({ name: '' });
  }
  
  return (
    <form>
      <input type="text" onChange={(e) => setFormvalues((current) => ({...current, name: e.target.value})}} />
      <button onClick={handleSave}>Save</button>
    </form>
  );
}

export default function App() {
  return (
    <OfflineProvider actions={actions} syncerInterval={2500}>
      <button onClick>Add</button>
    </OfflineProvider>
  );
}
