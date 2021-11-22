import Axios from "axios";
import { useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

// validation schema
const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
}).required();

const Login = ( { title } ) => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
    });

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
        <div className='ContentContainer'>
          <form onSubmit={handleSubmit()} noValidate>    
            <h3>{ title }</h3>
            <div className="FormContainer">
              <label htmlFor='username'>Username</label>
              <input
                  type="text"
                  onChange={(e) => setLoginUsername(e.target.value)}
                  {...register('username')}                
              />
              <p className="ErrorText">{errors.username?.message}</p>
            </div>
            <div className="FormContainer">
              <label htmlFor='password'>Password</label>            
              <input
                  type="password" 
                  onChange={(e) => setLoginPassword(e.target.value)}
                  {...register('password')}
              />
              <p className="ErrorText">{errors.password?.message}</p>
            </div>

            <button onClick={login}>Submit</button>
            <p>Not a user yet? <a className='Link' href='/register'>Register here!</a></p>
          </form>
        </div>
    )
}

export default Login
