import React from 'react';
import { useFormikContext } from 'formik';

const FormSubmit = ({label}) => {
    const {errors, isValid} = useFormikContext();
    return (
        <button>
            {label}
        </button> 
      );
}
 
export default FormSubmit;