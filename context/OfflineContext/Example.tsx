import { OfflineProvider } from './OfflineContext';
import { actions } from './actions';
import { wrappedActions } from './syncer';

const OfflineTodoList = () => {
  const { state } = useOfflineContext();
  const [todos, setTodos] = useState({});

  useEffect(async () => {
    const getTodos = async () => {
      const onlineTodos = await api.getTodos();
      const offlineTodos = Object.entries(state).filter(s => s.contextValue === 'todo').map(s => ({
        id: s.id || s.key,
        updatedAt: s.key,
        ...params,
        offline: true
      }));
      setTodos([...todos, setTodos].sort((a,b) => a.updatedAt - b.updatedAt));
    };
    getTodos()
  }, [state])

  return todos.map(todo => (<span>{todo.name} | {todo.offline ? <OrangeBullet /> : <GreenBullet />}</span>));
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
