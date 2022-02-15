import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  rentCount: number;
}

function App({rentCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen rentCount={rentCount} />
  );
}


export default App;
