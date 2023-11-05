import { useTheme, Theme } from '@mui/material';
import Paper from 'UI/Paper';
import Box from 'UI/Box';
import Typography from 'UI/Typography';
import Divider from 'UI/Divider';
import Grid from 'UI/Grid';
import Button from 'UI/Button';
import LoginWithEmail from './LoginWithEmail';
import useAppContext from 'context/AppContext';

const useStyles = (theme: Theme) => ({
  CompanyManagementRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  paper: {
    width: '50%',
    padding: '2rem',
  },
});

const Login = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const { handleLogIn } = useAppContext();

  return (
    <Box sx={styles.CompanyManagementRoot}>
      <Paper sx={styles.paper}>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h3">Please Log In</Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item>
            <LoginWithEmail handleLogIn={handleLogIn} />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h4">or</Typography>
          </Grid>
          <Grid item xs={5}>
            <Button>Create an account</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Login;
