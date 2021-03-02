import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './contents/login';
import Chat from './contents/chat';
import PrivateRoute from './routes/privateRoute';
import LoginRoute from './routes/loginRoute';
import Welcome from './contents/welcome';
import UserProvider from './providers/UserProvider';

function App() {
  const user = null;

  return (
    <>
      <UserProvider>
        <Router>
          <Switch>
            <LoginRoute path='/login'>
              <Login />
            </LoginRoute>
            <PrivateRoute exact path='/'>
              <Welcome />
            </PrivateRoute>
            <PrivateRoute path="/create">
              <Chat />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
