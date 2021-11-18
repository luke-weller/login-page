import LoginImage from './login.png';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';


// validation schema
const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
}).required();


async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}


export default function Login({ setToken }) {

  // handle validation
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onSubmit = async data =>  {
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(

    // header area of container
    <div className="ChildContainer">
        <div className='ContentContainer'> 
            <div>           
                <img
                    src={LoginImage}
                    alt="Login Icon"
                    width="80"
                    height="80" />
            </div>
        </div>
        <div className='ContentContainer'>
            <h3>Authenticator</h3>
            <p>Log-in to see the power</p>
        </div>

        {/* start of the form */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate>    
            <div className='FormContainer'>
                <label htmlFor='username'>Username</label>
                <input                
                    type="text" 
                    onChange={e => setUsername(e.target.value)}
                    {...register('username')}                  
                />
                <p className="ErrorText">{errors.username?.message}</p>
            </div>  
            <div className="FormContainer">    
                <label htmlFor='password'>Password</label>            
                <input
                    type="password" 
                    onChange={e => setPassword(e.target.value)}
                    required
                    {...register('password')}
                />
               <p className="ErrorText">{errors.password?.message}</p>
            </div>
            <input type="submit" value="login"/>
          </form>
      {/* end of the form */}

      {/* sign-up button */}
      <div className="ContentContainer">
        <p>Not a user yet? <a className='Link' href='/register'>Register here!</a></p>
      </div>
      
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};