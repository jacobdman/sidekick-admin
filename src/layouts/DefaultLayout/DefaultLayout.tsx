import Box from 'UI/Box/Box';
import { RouteLayout } from 'types/lib/LayoutTypes';
import { useTheme, Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
  root: {
    height: '100vh',
    maxWidth: '100vw',
  },
  childrenContainer: {},
});

const DefaultLayout: RouteLayout = ({ children }) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <Box sx={styles.root}>
      <Box sx={styles.childrenContainer}>{children}</Box>
    </Box>
  );
};

export default DefaultLayout;
