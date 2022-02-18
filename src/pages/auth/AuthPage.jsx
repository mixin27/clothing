import React from 'react';
import { SignIn } from '../../components/auth';
import './AuthPage.styles.scss';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <SignIn />
    </div>
  );
};

export default AuthPage;
