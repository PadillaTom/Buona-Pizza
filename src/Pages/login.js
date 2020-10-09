import React from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  // State to track User Data:
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Functions:
  const loginUser = (e) => {
    e.preventDefault();
    // Login ----> Setting Email and Pass, Then Authenticate via Firebase.
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // Logged In: Redirect to Homepage.
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };
  const registerUser = (e) => {
    e.preventDefault();
    // Register ---> with Email and Pass, Then:
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Created the User... now Log In
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };

  // Main:
  return (
    <section className='section form-section'>
      <div className='section-center'>
        <div className='section-title'>
          <h2>Login</h2>
        </div>
        {/* Form */}
        <form className='login-form'>
          {/* Input */}
          <div className='form-control'>
            <label htmlFor=''>Email</label>
            <input
              type='email'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Input */}
          <div className='form-control'>
            <label htmlFor=''>Password</label>
            <input
              type='password'
              placeholder='Password'
              autoComplete='current'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Submit */}
          <button
            type='button'
            className='btn-primary btn-form'
            onClick={loginUser}
          >
            Submit
          </button>
          <p className='register-text'>
            To Register: Please fill the form then
            <button
              type='button'
              className='btn-register'
              onClick={registerUser}
            >
              Click here.
            </button>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
