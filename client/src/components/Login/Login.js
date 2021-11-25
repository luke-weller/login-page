import Axios from "axios";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// validation scheema
const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
}).required();

const Login = () => {
  // validation
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

    // logic to authenticate a user
    const userAuthentication = (data) => {
        Axios({
          method: "POST",
          data: {
            username: data.username,
            password: data.password,
          },
          withCredentials: true,
          url: "http://localhost:4000/login",
        }).then((res) => console.log(res));
      };

    return (        
        <div>
          <h1>Login</h1>
          <form onSubmit={handleSubmit(userAuthentication)} noValidate>

            {/* username field */}
            <div>
              <label htmlFor='username'>Username</label>
              <input
                name='username'
                type='text'
                {...register('username')}
              />
              <p className='ErrorText'>{errors.username?.message}</p>
            </div>

            {/* password field */}
            <div>
              <label htmlFor='password'>Password</label>
                <input
                  name='password'
                  type='password'
                  {...register('password')}
                />
                <p className='ErrorText'>{errors.password?.message}</p>
            </div>

              <button>Submit</button>
          </form>
        </div>
    )
}

export default Login