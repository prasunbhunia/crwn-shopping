import { React } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase';
import CartIcon from '../cart-icon/cart-icon';
import Cartdropdown from '../cart-dropdown/cart-dropdown';

import "./header.scss";

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to="/">'
            <Logo className='logo' />
        </Link>
        <div className="nav">
            <Link className='nav-menu' to='/shop'>SHOP</Link>
            <Link className='nav-menu' to='/shop'>CONTACT</Link>
            {
                currentUser ?
                (<div className='nav-menu' onClick={() => auth.signOut()}>Sign Out</div>)
                : (<Link className='nav-menu' to='/Login'>Sign In</Link>)
            }  
            <CartIcon />
        </div>
        {
            hidden ? null : <Cartdropdown />
        }
    </div>
)

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
});


export default connect(mapStateToProps)(Header);