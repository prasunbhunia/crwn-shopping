import React from 'react';

import './custom-button.scss';

const CustomButton = ({children, isGoogle, ...otherprops}) => (
    <button className={`${isGoogle ? 'google-sign-in':''} custom-button`} {...otherprops}>
        {children}
    </button>
)

export default CustomButton;