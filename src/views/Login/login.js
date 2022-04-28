import React from 'react';
import * as Yup from 'yup';
import SimpleControlledForm from "components/simpleControlledForm/simpleForm";

const LoginForm = () => {
    const login = [
        {
            type: 'email',
            name:'username',
            label: 'Username',
            value:'',
            className:'w-1/3 m-4'
        },
        {
            type: 'password',
            name:'password',
            label: 'Password',
            value:'',
            className:'w-1/3 m-4'
        }
    ];
    const SignupSchema = Yup.object().shape({
      username: Yup.string().email('Invalid email')
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    });
    const handleClick = (values) => console.log(values); 
    return (
        <SimpleControlledForm
            initialValues={{username:'', password:''}}
            validateSchema={SignupSchema}
            fields={login}
            handleSubmit={handleClick}
        />
      );
}
 
export default LoginForm;