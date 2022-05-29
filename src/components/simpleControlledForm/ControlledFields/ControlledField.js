import React from 'react';
import DefaultInput from './DefaultInput';

// const DEFAULT_INPUTS = ['text', 'email', 'password', 'select'];
const ControlledField = ({
    className,
    type,
    name,
    label,
    options,
    value,
}) => {
    switch (type) {
        case 'text':
            return <p>Nothing to show</p>
        default:
            return (
                <DefaultInput 
                    name={name}
                    className={className}
                    label={label}
                    type={type}
                    options={options}
                />                
            );
    }
}
 
export default ControlledField;