import React from 'react';
import * as Yup from 'yup';
import SimpleControlledForm from "components/simpleControlledForm/simpleForm";
import http from 'services/http';
import auth, { isLoggedIn } from 'services/auth';
import { toast } from "react-toastify";

const LoginForm = () => {
    const login = [
        {
            type: 'email',
            name:'username',
            label: 'Username',
            value:'',
            className:'w-full px-[25%] py-4'
        },
        {
            type: 'password',
            name:'password',
            label: 'Password',
            value:'',
            className:'w-full px-[25%] py-4'
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
    
    const handleClick = async (values) => {
        console.log(values);
        isLoggedIn();
        http.post('/login', values)
        .then((response) => {
            console.log(response);
            auth.logIn(response.data);
        })
        .catch((error) => {
            console.log(error);
            toast.error('A terrible error has ocurred!');
        });
    }; 
    
    return (
        <div className='w-1/2 mx-[25%] my-10'>
            <SimpleControlledForm
                initialValues={{username:'', password:''}}
                validateSchema={SignupSchema}
                fields={login}
                handleSubmit={handleClick}
            />
            <p> Hola 123 {auth.isLoggedIn() & auth.isLoggedIn()}</p>
        </div>
      );
}
 
export default LoginForm;