import React from 'react';
import { Typography } from '@mui/material';
import { Navigate } from "react-router-dom";
import auth from 'services/auth';

const Landing = () => {
    if (auth.isLoggedIn()) return <Navigate to='home'/>
    return (<>
        <Typography variant="h1" component="h1" className='bg-slate-500'> 
            LANDING PAGE PARA NUEVOS INGRESOS
        </Typography>
    </>);
}
 
export default Landing;