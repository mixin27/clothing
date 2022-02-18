import React from 'react';
import './Button.styles.scss';

const Button = ({ children, isGoogleSignIn, ...rest }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
