import { React } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/logo.svg';

import "./header.scss";

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">'
            <Logo className='logo' />
        </Link>
        <div className="nav">
            <Link className='nav-menu' to='/shop'>SHOP</Link>
            <Link className='nav-menu' to='/shop'>CONTACT</Link>
            <Link className='nav-menu' to='/Login'>LOGIN</Link>
        </div>
    </div>
)

export default Header;