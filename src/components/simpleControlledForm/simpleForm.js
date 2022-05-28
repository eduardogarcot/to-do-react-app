import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import ControlledField from './ControlledFields';
import FormSubmit from './ControlledFields/FormSubmit/formSubmit';

const SimpleControlledForm = ({fields, validateSchema, initialValues, handleSubmit }) => {
    
    return (<Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={async (values) => handleSubmit(values)}
    >
        <Form className='flex flex-wrap'>
            {fields.map((field, index)=><ControlledField
                key={index}
                className={field.className}
                type={field.type}
                name={field.name}
                label={field.label}
                value={field.value}
                options={fields.options}
            />)}
            <FormSubmit label='Login'/>        
        </Form>
    </Formik>);
}
 
export default SimpleControlledForm;

SimpleControlledForm.propTypes = {
    fields: PropTypes.array,
    validateSchema: PropTypes.object,
    initialValues: PropTypes.object,
    handleSubmit: PropTypes.func,
}
