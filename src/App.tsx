// Firebase
import './firebaseConfig';
// Routes
import Router from 'routes/Router';
// Components
import Login from 'components/Login';
// Context
import useAppContext from 'context/AppContext';

function App() {
  const { loggedInUser } = useAppContext();

  if (!loggedInUser?.id) return <Login />;

  return (
    <>
      <Router />
    </>
  );
}

export default App;
