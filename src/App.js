import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './contents/login';
import Chat from './contents/chat';
import PrivateRoute from './routes/privateRoute';
import Welcome from './contents/welcome';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute exact path='/'>
            <Welcome />
          </PrivateRoute>
          <PrivateRoute path="/create">
            <Chat />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}

export default App;
