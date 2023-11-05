import { useTheme, Theme } from '@mui/material';
import Paper from 'UI/Paper';
import Box from 'UI/Box';
import Typography from 'UI/Typography';
import Divider from 'UI/Divider';
import Grid from 'UI/Grid';

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

const CompanyManagement = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.CompanyManagementRoot}>
      <Paper sx={styles.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3">Company Management</Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography>Company Name:</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default CompanyManagement;
