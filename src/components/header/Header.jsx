import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.styles.scss';

const Header = () => {
  const { user, signOut } = React.useContext(AuthContext);

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {user ? (
          <div className="option" onClick={() => signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/auth">SIGN IN</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
