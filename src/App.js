import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import useToken from './components/useToken/useToken';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";

  function App() {

    const { token, setToken } = useToken();
  
    if(!token) {
      return <Login setToken={setToken} />
    }

  return (
    <div className='Container'>
      <h3>Application</h3>
      <Router>
        <Routes>
          <Route
            path="/dashboard"
            element={<Dashboard />}>
          </Route>
          <Route
            path="/preferences"
            element={<Preferences />}>
          </Route>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;

