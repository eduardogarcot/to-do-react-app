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