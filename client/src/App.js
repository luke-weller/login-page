import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';



function App() {
  const [data, setData] = useState(null);
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }

 
  // return user data for personalisation when logged in
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };


  return (
    <div>
      <Header />
      <Register />
      <Login />

      <Router>
        <Routes>
          <Route
            path='/dashboard'
            element={ <Dashboard />}
          >
          </Route>
          <Route
            path='preferences'
            element={ <Preferences />}
          >
          </Route>
        </Routes>
      </Router>

      <div>
        <h2>Get User</h2>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div>
    </div>
  );
}

export default App;