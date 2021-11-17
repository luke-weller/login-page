import LoginImage from './login.png';
import { useState } from 'react';
import PropTypes from 'prop-types';


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
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
  }

  return(
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
        <form onSubmit={handleSubmit}>    
            <div className='FormContainer'>
                <label htmlFor='email'>Email</label>
                <input                
                    type="email" 
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    required                  
                />
            </div>  
            <div className="FormContainer">    
                <label htmlFor='password'>Password</label>            
                <input
                    type="password" 
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                />
            </div>
            <input type="submit" value="login"/>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};