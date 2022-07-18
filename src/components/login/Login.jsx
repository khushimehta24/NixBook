import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import TextField from '../TextField/TextField'
import React from 'react'
import { useNavigate } from 'react-router'
import ElevateAppBar from '../navbar/Navbar'
import { btn, btn2, gridContainer, griditem, ptypo, textField, typo, loginBtn } from './LoginCss'
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { AuthService } from '../../services/authservices'

const INITIAL_FORM_STATE = {
    username: "",
    password: "",
};


const FORM_VALIDATION = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string()
        .min(8, "Password should atleast contain 8 characters")
        .required("Required"),
});

function Login() {
    const navigate = useNavigate()

    const handleSubmit = async (values) => {
        await AuthService.Login(values.username, values.password)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <ElevateAppBar />
            <Grid container sx={gridContainer}>
                <Grid item md={6} sm={8} xs={12} sx={griditem}>

                    <Card sx={{ width: '85%' }}>
                        <div>
                            <Button sx={btn} onClick={() => navigate('/login')}>Login</Button>
                            <Button sx={btn2} onClick={() => navigate('/signup')}>SignUp</Button>
                        </div>
                        <CardContent>
                            <Formik
                                initialValues={{ ...INITIAL_FORM_STATE }}
                                validationSchema={FORM_VALIDATION}
                                onSubmit={(values) => handleSubmit(values)}>
                                <Form>

                                    <Typography variant='h5' sx={typo}>Welcome, Back!</Typography>

                                    <div style={ptypo}>
                                        <Typography variant='p' >Username*</Typography>
                                        <TextField sx={textField} name='username' />
                                    </div>

                                    <div style={ptypo}>
                                        <Typography variant='p' >Password*</Typography>
                                        <TextField sx={textField} name='password' type='password' />
                                    </div>
                                    <Button sx={loginBtn} type='submit'>Login</Button>
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