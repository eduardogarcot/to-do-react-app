import React from 'react';
import * as Yup from 'yup';
import SimpleControlledForm from "components/simpleControlledForm/simpleForm";
import http from 'services/http';
import auth, { isLoggedIn } from 'services/auth';
import { toast } from "react-toastify";
import { useNavigate, useLocation } from 'react-router-dom';

const LoginForm = () => {
    const location = useLocation();
    const navigate = useNavigate();if (auth.isLoggedIn) {
        const { from } = location.state || { from: { pathname: "/" } };
        navigate(from, { replace: true });
      }
    
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
            auth.logIn(response.data);
            const { from } = location.state || { from: { pathname: "/" } };
            navigate(from, { replace: true });
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
        </div>
      );
}
 
export default LoginForm;