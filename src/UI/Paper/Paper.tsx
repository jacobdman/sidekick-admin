import { default as MUIPaper, PaperProps } from '@mui/material/Paper';
import { useTheme, Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
  root: {
    borderRadius: theme.borderRadius.default,
    border: '1.5px solid #141414',
    background: '#FCFBFA',
    boxShadow:
      '5px -4px 0px 0px rgba(226, 255, 0, 0.90), 4px 4px 0px 0px #141414',
  },
});

interface Props extends PaperProps {}

const Paper: React.FC<Props> = ({ children, sx, ...props }) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <MUIPaper sx={{ ...styles.root, ...sx }} {...props}>
      {children}
    </MUIPaper>
  );
};

export default Paper;
