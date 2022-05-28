import React from 'react';
import { useFormikContext } from 'formik';

const FormSubmit = ({label}) => {
    const {errors, isValid} = useFormikContext();
    return (
        <button className='p-4 border border-solid border-slate-900 radius rounded bg-sky-600 hover:bg-blue-700 min-w-[10rem]'>
            {label}
        </button> 
      );
}
 
export default FormSubmit;