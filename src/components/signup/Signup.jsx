import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import TextField from '../TextField/TextField';
import { Box } from '@mui/system'
import { Formik, Form } from "formik";
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { btn, btn2, gridContainer, griditem, ptypo, textField, typo, loginBtn, textFields, ptypos } from '../login/LoginCss'
import ElevateAppBar from '../navbar/Navbar'
import * as Yup from "yup";
import { AuthService } from '../../services/authservices';
import axiosHandler from '../../helpers/axiosHandler';


const INITIAL_FORM_STATE = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
};


const FORM_VALIDATION = Yup.object().shape({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string()
        .min(8, "Password should atleast contain 8 characters")
        .required("Required"),
    confirmpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password should match")
        .required("Required"),
});

function Login() {
    const navigate = useNavigate()

    const handleSubmit = async (values) => {
        await AuthService.SignUp(values.username, values.email, values.password)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                let error = err.request.response.split(":")[6].split("{ ")[1]
                axiosHandler(`${error} already taken`)
            })
    }

    return (
        <>
            <ElevateAppBar />
            <Grid container sx={gridContainer}>
                <Grid item md={6} sx={griditem}>

                    <Card sx={{ width: '85%' }}>
                        <div>
                            <Button sx={btn2} onClick={() => navigate('/login')}>Login</Button>
                            <Button sx={btn} onClick={() => navigate('/signup')}>SignUp</Button>
                        </div>
                        <CardContent>
                            <Formik
                                initialValues={{ ...INITIAL_FORM_STATE }}
                                validationSchema={FORM_VALIDATION}
                                onSubmit={(values) => handleSubmit(values)}>
                                <Form>

                                    <Typography variant='h5' sx={typo}>Welcome, Back!</Typography>

                                    <Box sx={{ display: 'flex', flexDirection: { md: 'row', sm: 'row', xs: 'column' } }}>

                                        <div style={ptypos}>
                                            <Typography variant='p' >Username*</Typography>
                                            <TextField sx={textFields} required name='username' />
                                        </div>

                                        <div style={ptypos}>
                                            <Typography variant='p' >Email*</Typography>
                                            <TextField sx={textFields} name='email' />
                                        </div>

                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: { md: 'row', sm: 'row', xs: 'column' } }}>

                                        <div style={ptypos}>
                                            <Typography variant='p'  >Password*</Typography>
                                            <TextField sx={textFields} name='password' type='password' />
                                        </div>

                                        <div style={ptypos}>
                                            <Typography variant='p'  >Confirm Password*</Typography>
                                            <TextField sx={textFields} name='confirmpassword' type='password' />
                                        </div>

                                    </Box>

                                    <Button sx={loginBtn} type="submit">SignUp</Button>
                                </Form>
                            </Formik>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Login