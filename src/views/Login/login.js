import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import SimpleControlledForm from "components/simpleControlledForm/simpleForm";
import http from 'services/http';
import auth, { isLoggedIn } from 'services/auth';
import { toast } from "react-toastify";
import { useNavigate, useLocation } from 'react-router-dom';
import { logIn } from 'redux/slices/isLogged';
import Logo from 'components/Logo';
import { setCurrentProject } from 'redux/slices/currentProject';

const LoginForm = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if (auth.isLoggedIn()) {
        const { from } = location.state || { from: { pathname: "/" } };
        navigate(from, { replace: true });
      }
    
    const login = [
        {
            type: 'email',
            name:'username',
            label: 'Username',
            value:'',
            className:'w-full px-[2%] md:px-[30%] py-4'
        },
        {
            type: 'password',
            name:'password',
            label: 'Password',
            value:'',
            className:'w-full px-[2%] md:px-[30%] py-4'
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
        //isLoggedIn();
        http.post('/login', values)
        .then((response) => {
            auth.logIn(response.data);
            const { from } = location.state || { from: { pathname: "/home" } };
            dispatch(logIn());
            const getProjectIdURL = `/project/${response.data.currentProjectId}`;
            http.get(getProjectIdURL).then((res) => {
                dispatch(setCurrentProject(res.data))
                navigate(from, { replace: true });
            })    
        })
        .catch((error) => {
            console.log(error);
            toast.error('Username or Password invalids.\n Please try again.');
        });
    }; 
    
    return (<div className='px-2 py-16 md:px-16'>
    <Logo theme='login'/>
    <div className='w-[90%] md:w-1/2 mx-[5%] md:mx-[25%] my-10'>
            <SimpleControlledForm
                initialValues={{username:'', password:''}}
                validateSchema={SignupSchema}
                fields={login}
                handleSubmit={handleClick}
            />
        </div>        
    </div>
      );
}
 
export default LoginForm;