import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  const [data, setData] = useState(null);
 
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
    <div className="Container">
      <div className="ChildContainer">

      <Register />
      <Login />

      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div>
    </div> </div>
  );
}

export default App;