import React from 'react';
import { useFormikContext } from 'formik';

const FormSubmit = ({label}) => {
    const {isValid, status, touched} = useFormikContext();
    const disabled = !isValid ||
        (Object.keys(touched).length === 0 && touched.constructor === Object) ||
        (status && !status.documentsStatus);
    return (
        <div className="flex w-full justify-center p-4">
            <button type='submit' disabled={disabled} className='p-2 border-2 border-solid border-sky-600 radius rounded bg-white hover:bg-sky-300 hover:border-slate-600 min-w-[10rem] disabled:opacity-50' >
                {label}
            </button>
        </div>
      );
}
 
export default FormSubmit;