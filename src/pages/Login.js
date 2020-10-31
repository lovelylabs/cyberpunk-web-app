import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { login } from '../firebase/auth'

function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://material-ui.com/'>
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

export default function Login(props) {
    const classes = useStyles()

    const { register, handleSubmit, reset } = useForm()
    const [isLoading, setLoading] = useState(false)
    const onSubmit = async (data) => {
        let user
        setLoading(true)
        try {
            console.log(data)
            user = await login(data)
            reset()
        } catch (error) {
            console.log(error)
            console.log(error)
        }

        if (user) {
            props.history.push(`/profile/${user.uid}`)
        } else {
            setLoading(false)
        }
    }

    return (
        <div>
            <Container component='main' maxWidth='xs'>
                <CssBaseline></CssBaseline>
                <div className={classes.paper}>
                    <Typography component='h1' variant='h5'>
                        Sign in
                    </Typography>
                    <form
                        className={classes.form}
                        // noValidate
                        onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            type='email'
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            autoComplete='email'
                            autoFocus
                            inputRef={register}
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                            inputRef={register}
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.submit}>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href='#' variant='body2'>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>

            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <ul>
                    <li>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            // ref={register}
                        />
                    </li>
                    <li>
                        <label>Email:</label>
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            // ref={register}
                        />
                    </li>
                </ul>
                <Button type='submit'>Log In</Button>
                <Link to='/signup'>Sign Up</Link>
            </form> */}
        </div>
    )
}
