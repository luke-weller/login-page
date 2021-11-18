import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import useToken from './components/useToken/useToken';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  } from "react-router-dom";

  function App() {

    const { token, setToken } = useToken();
  
    if(!token) {
      return <Login setToken={setToken} />
    }

    const logout = () => {
      sessionStorage.clear(setToken);
      window.location.reload(true);
    }

  return (
    <div className='Container'>
    <div className='ChildContainer'>  


      <Router>
      <Link to="/Preferences"><button>
              Preferences 
            </button>
      </Link>
      <Link to="/Dashboard"><button>
              Dashboard 
            </button>
      </Link>
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
      <button className='Logout' onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default App;

