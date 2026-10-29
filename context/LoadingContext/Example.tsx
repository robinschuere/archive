
const MyComponent = () => {
  const { isLoading, dispatch } = useLoadingContext();
  const [state, setState] = useState([]);

  useEffect(() => {
    const load = async () => {
      dispatch({ type: 'add', name: 'MyComponent_initial', level: 'Granular' });
      const values = await loadSpecificValues();
      setState(values);
      dispatch({ type: 'remove', name: 'MyComponent_initial', level: 'Granular' });
    };
    load();
  }, [])

  return <div>{renderAsComponentListItems(state)}</div>
}

const InitialLoader = () => {
  const { isLoading, dispatch } = useLoadingContext();
  const [state, setState] = useState([]);

  useEffect(() => {
    const load = async () => {
      dispatch({ type: 'add', name: 'InitialLoader', level: PageLoadingLevel });
      const values = await loadStores();
      setState(values);
      dispatch({ type: 'remove', name: 'InitialLoader', level: PageLoadingLevel });
    };
    load();
  }, [])

  return <div>{renderAsComponentListItems(state)}</div>
}

const PageLoader = () => {
  const { isPageLoading } = useLoadingContext();

  return isPageLoading ? <Loader /> : null;
}

export const Page = () => {
  <LoadingProvider>
    <PageLoader />
    <InitialLoader />
    <MyComponent />
  </LoadingProvider>
};
