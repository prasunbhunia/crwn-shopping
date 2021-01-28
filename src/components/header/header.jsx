import { React } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase';

import "./header.scss";

const Header = ({currentUser}) => (
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
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});


export default connect(mapStateToProps)(Header);