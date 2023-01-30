import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, Navigate } from 'react-router-dom';
import { LocalGasStationRounded, ReportGmailerrorred } from '@mui/icons-material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        GREDDIIT
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function SignUp() {

  const [signstate, setsignstate] = React.useState(1)
  const [email,setemail] = React.useState('')
  const [pass,setpass] = React.useState('')


  const navigate = useNavigate()
  // window.localStorage.setItem('loginstatus',true);

  function signinhandle() {
    setsignstate(2);
  }
  function signuphandle() {
    setsignstate(3);
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    window.localStorage.setItem('lName', 'Reddy')
    window.localStorage.setItem('fName', 'Srihitha')
    window.localStorage.setItem('lName', 'Reddy')
    window.localStorage.setItem('uName', '@Srihitha_mallepalli')
    window.localStorage.setItem('email', 'srihitha@gmail.com')
    window.localStorage.setItem('contact','8927839758')
    window.localStorage.setItem('age', '19')
    window.localStorage.setItem('password', 'admin')


    const data = new FormData(event.currentTarget);

    // window.localStorage.setItem('loginstatus', "true");
    // navigate("/profile")


    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    
      if(((signstate === 2) && (data.get('email') === "admin")) && (data.get('email') === data.get('password'))) navigate("/profile")
    
    {
      
      (signstate === 3) && window.localStorage.setItem('lName', data.get('firstName'))
      (signstate === 3) && window.localStorage.setItem('fName', data.get('lastName'))
      (signstate === 3) && window.localStorage.setItem('uName', data.get('userName'))
      (signstate === 3) && window.localStorage.setItem('email', data.get('email'))
      (signstate === 3) && window.localStorage.setItem('contact', data.get('contact'))
      (signstate === 3) && window.localStorage.setItem('age', data.get('age'))
      (signstate === 3) && window.localStorage.setItem('password', data.get('password'))
      
      window.localStorage.setItem('loginstatus', "true")
      // && navigate("/profile")
    }
    //   navigate("/profile")
    {
      if(signstate === 3 ) navigate("/profile")
    }
    
  };
  
  if(window.localStorage.getItem("loginstatus") === 'true') return <Navigate to="/profile"/>
  else return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            GREDDIIT LOGIN/REGISTER
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={signuphandle}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={signinhandle}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {signstate === 3 &&
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="userName"
                      label="User Name"
                      name="userName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="age"
                      label="Age"
                      name="age"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="contact"
                      label="Contact"
                      name="contact"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Username"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Submit
                  </Button>
                </>
              }
{/* {console.log(typeof window.localStorage.getItem("loginstatus"))} */}
              {signstate === 2 &&
                <>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={(event)=> setemail(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={(event)=> setpass(event.target.value)}
                    />
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={!(email) || !(pass)}
                    // onClick={checkcred}
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Submit
                  </Button>
                </>
              }

              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>

            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}