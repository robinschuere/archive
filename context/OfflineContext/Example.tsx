import { OfflineProvider } from './OfflineContext';
import { actions } from './actions';
import { wrappedActions } from './syncer';

const OfflineTodoList = () => {
  const { state } = useOfflineContext();
  return Object.entries(state)
    .filter(s => s.contextValue === 'todo')
    .map(({ contextValue, contextAction, params, id, key}) => (
    <span key={key}>
      {contextValue}: {params[0].name} Offline...
    </span>
  );
}

const AddTodo = () => {
  const { dispatch } = useOfflineContext();
  const [formValues, setFormValues] = useState({ name: '' });
  
  const handleSave = async () => {
    const inserted = await wrappedActions(actions).insert('todo', [{...formValues}])
    if (inserted) setFormValues({ name: '' });
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
      <OfflineTodoList />
      <AddTodo />
    </OfflineProvider>
  );
}
