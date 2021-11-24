import Axios from "axios";
import { useState } from "react";


const Login = () => {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const userAuthentication = () => {
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
        <div>
          <h1>Login</h1>
          <form>
            {/* username field */}
            <div>
              <label htmlFor='username'>Username</label>
              <input
                type="text"
                onChange={(e) => setLoginUsername(e.target.value)}
              />
            </div>

            {/* password field */}
            <div>
              <label htmlFor='password'>Password</label>
                <input
                  type="password"
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
            </div>

              <button onClick={userAuthentication}>Submit</button>
          </form>
        </div>
    )
}

export default Login