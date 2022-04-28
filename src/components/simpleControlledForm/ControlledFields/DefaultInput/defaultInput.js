import React from 'react';
import { Field } from 'formik';

const DefaultInput = ({name, placeholder, options, className, type, label }) => {
    return (
        <Field  name={name}>
            {({ field, form: { touched, errors }, meta}) => (
            <div className={`${className} flex flex-col`}>
                <label for={name}>{label}</label>
                <input 
                    className='p-2 rounded-lg border border-slate-700'
                    type={type} 
                    placeholder={placeholder} 
                    {...field} 
                />
                {meta.touched && meta.error && (
                <div className='p-2 rounded-lg border border-slate-700'>
                    {meta.error}
                </div>
                )}
            </div>
            )}
        </Field>);
}
 
export default DefaultInput;