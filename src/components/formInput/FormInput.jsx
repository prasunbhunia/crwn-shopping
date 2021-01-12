import React from 'react';

import './formInput.scss';

const FormInput = ({handleChange, label, ...otherinputs }) => (
    <div className="group">
        <input className='form-input' onChange={handleChange} {...otherinputs} />
        {
            label ?
            (<label className={`${otherinputs.value.length ? 'shrink': ''} form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div>
    
)

export default FormInput;