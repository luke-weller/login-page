import Axios from "axios";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// validation schema
const schema = yup.object().shape({
  username: yup.string().required("Select a unique username").min(4),
  password: yup.string().required("Select a password").min(8),
  firstName: yup.string().required("Enter your first name"),
  lastName: yup.string().required("Enter your last name"),
  email: yup.string().required("Email is required").email("Must be a valid email address"),
}).required();

const Register = () => {
    // validation
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
    });

    const userRegistration = (data) => {
        Axios({
          method: "POST",
          data: {
            username: data.username,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
          },
          withCredentials: true,
          url: "http://localhost:4000/register",
        }).then((res) => console.log(res));
      };

    return (
        <div className='ChildContainer'>
          <h2>Register</h2>
          <form onSubmit={handleSubmit(userRegistration)} noValidate>
          
            {/* first name field */}
            <div>
              <label htmlFor='firstName'>First Name</label>
              <input
                  type="text"
                  {...register('firstName')}
              />
              <p className='ErrorText'>{errors.firstName?.message}</p>
            </div>

            {/* last name field */}
            <div>
              <label htmlFor='lastName'>Last Name</label>
              <input
                  type="text"
                  {...register('lastName')}
              />
              <p className='ErrorText'>{errors.lastName?.message}</p>
            </div>

            {/* email field */}
            <div>
              <label htmlFor='email'>Email</label>
              <input
                  type="email"
                  {...register('email')}
              />
              <p className='ErrorText'>{errors.email?.message}</p>
            </div>

            {/* username field */}
            <div>
              <label htmlFor='username'>Username</label>
              <input
                  type="text"
                  {...register('username')}
              />
              <p className='ErrorText'>{errors.username?.message}</p>
            </div>

            {/* password field */}
            <div>
              <label htmlFor='password'>Password</label>
              <input
                  type="password"
                  {...register('password')}
              />
              <p className='ErrorText'>{errors.password?.message}</p>

            </div>

              <button>Submit</button>
          </form>
        </div>
    )
}

export default Register