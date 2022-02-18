import React from 'react';
import FormInput from '../common/FormInput';
import Button from '../common/Button';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './SignIn.styles.scss';

const SignIn = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('authData', { email, password });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          handleChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          value={email}
          required
        />

        <FormInput
          label="Password"
          handleChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          value={password}
          required
        />

        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
