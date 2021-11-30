import React, { useState } from "react";
import "./App.css";
// import Axios from "axios";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import Logout from "./components/Logout/Logout";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [data, setData] = useState(null);
  // const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  // // return user data for personalisation when logged in
  // const getUser = () => {
  //   Axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:4000/user",
  //   }).then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   });
  // };

  return (
    <div className="Container">
      <Router>
        <Header />
        <Routes>
          {/* routes before login */}
          <Route
            path="/login"
            element={<Login onLoginUpdate={setIsLoggedIn} />}
          ></Route>
          <Route path="/:pageName" element={<PageNotFound />}></Route>
          <Route
            path="/register"
            element={<Register onLoginUpdate={setIsLoggedIn} />}
          ></Route>

          {/* routes after login */}
          {isLoggedIn && (
            <>
            <Route
              path="/logout"
              element={<Logout onLoginUpdate={setIsLoggedIn} />}
            ></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/Preferences" element={<Preferences />}></Route>
            </>
          )}

          {/* routes for all */}
          <Route
            path="/"
            element={
              <Home isLoggedIn={isLoggedIn} onLoginUpdate={setIsLoggedIn} />
            }
          ></Route>
        </Routes>
      </Router>

      {/* <div className='ChildContainer'>
        <h2>Get User</h2>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div> */}
    </div>
  );
}

function PageNotFound() {
  const params = useParams();
  let message = `"${params.pageName}" has not been found!`
  if(params.pageName === 'dashboard' || 'preferences'){
    message = 'You need to be logged in to access this page'
  } return message; }

function Home({ isLoggedIn, onLoginUpdate }) {
  return (
    <>{isLoggedIn ? <Dashboard /> : <Login onLoginUpdate={onLoginUpdate} />}</>
  );
}

export default App;
