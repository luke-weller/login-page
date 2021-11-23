import Axios from "axios";
import { useState } from "react";

const Register = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const register = () => {
        Axios({
          method: "POST",
          data: {
            username: registerUsername,
            password: registerPassword,
          },
          withCredentials: true,
          url: "http://localhost:4000/register",
        }).then((res) => console.log(res));
      };

    return (
        <div className="ContentContainer">
          <h1>Register</h1>

          <div className="FormContainer">
            <label htmlFor='username'>Username</label>
            <input
                onChange={(e) => setRegisterUsername(e.target.value)}
                type="text"
            />
          </div>
          <div className="FormContainer">
            <label htmlFor='password'>Password</label>
            <input
                type="password"
                onChange={(e) => setRegisterPassword(e.target.value)}
            />
          </div>
            <button onClick={register}>Submit</button>
            
        </div>
    )
}

export default Register
