import { CachedProvider, useCacheContext } from './CacheContext';

const ComponentWithCachedData = () => {
  const { getData } = useCachedContext();
  const [todos, setTodos] = useState(getData('state'));

  return getData('state').map(s => (<span>{s}</span>));
}

export default function App() {
  return (
    <CachedProvider dataConfig={{
      state: {
        get: () => Promise.resolve(['todo', 'todo1', 'todo2'])
        onError: (ex: unknown) => Promise.resolve(),
        cacheTimeInMs: 60 * 1000,
    }}>
      <ComponentWithCachedData />
    </CachedProvider>
  );
}
