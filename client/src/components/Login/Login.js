import Axios from "axios";
import { useState } from "react";

const Login = () => {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const login = () => {
        Axios({
          method: "POST",
          data: {
            username: loginUsername,
            password: loginPassword,
          },
          withCredentials: true,
          url: "http://localhost:4000/login",
        }).then((res) => console.log(res));
      };
    return (
        <div className="ContentContainer">
          <h1>Login</h1>
          <div className="FormContainer">
            <label htmlFor='username'>Username</label>
            <input
                type="text"
                onChange={(e) => setLoginUsername(e.target.value)}
            />
          </div>
          <div className="FormContainer">
            <label htmlFor='password'>Password</label>
              <input
                  type="password"
                  onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <button onClick={login}>Submit</button>
        </div>
    )
}

export default Login