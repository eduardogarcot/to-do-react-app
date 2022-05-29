import React from 'react';
import { useFormikContext } from 'formik';

const FormSubmit = ({label}) => {
     const {isValid} = useFormikContext();
    return (
        <button type='submit' disabled={!isValid} className='p-4 border border-solid border-slate-900 radius rounded bg-sky-600 hover:bg-blue-700 min-w-[10rem] disabled:opacity-50' >
            {label}
        </button> 
      );
}
 
export default FormSubmit;