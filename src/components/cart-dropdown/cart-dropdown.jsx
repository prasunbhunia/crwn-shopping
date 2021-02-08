import React from 'react';

import CustomButton from '../custom-button/custom-button';

import './cart-dropdown.scss';

const Cartdropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default Cartdropdown;