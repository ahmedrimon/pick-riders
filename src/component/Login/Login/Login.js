import React, { useState } from 'react';
import './Login.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import fingerprint from '../../../images/fingerprint.png';

/* firebase */
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { firebaseConfig } from '../../../firebase.config';

const Login = () => {
  const [user, setUser] = useState({});

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        console.log(token, user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <section className="login-container rounded">
      <form>
        <img
          className="img-fluid fingerprint"
          src={fingerprint}
          alt="fingerprint"
        />
        <div className="login-second">
          <div className="login-item">
            <input
              className="input-field"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="login-item">
            <input
              className="input-field"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="login-item">
            <input
              className="input-field"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
        </div>
        <button type="submit" className="mt-5 login-button">
          Sign Up
        </button>
      </form>
      <section className="mx-5 mt-4" style={{ color: '#fff' }}>
        <p>
          By creating an account, you agree and accept our <a href="#">Terms</a>{' '}
          and <a href="#">Privacy Policy.</a>
        </p>
        <p>
          Already have an account? <a href="/login">Login.</a>
        </p>
        <button onClick={handleSignIn} className="google-button">
          {' '}
          <FontAwesomeIcon icon={faGoogle} /> Sign in With Google
        </button>
      </section>
      <h2 className="text-success">{user.email}</h2>
    </section>
  );
};

export default Login;
