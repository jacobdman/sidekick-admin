import { default as MUIButton, ButtonProps } from '@mui/material/Button';
import { useTheme, Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
  root: {
    padding: `${theme.spacing(5)} ${theme.spacing(6)}`,
    borderRadius: theme.borderRadius.default,
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
});

import React from 'react';

interface Props extends ButtonProps<'button', any> {}

const Button: React.FC<Props> = ({ children, sx, ...props }) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <MUIButton sx={{ ...styles.root, ...sx }} {...props}>
      {children}
    </MUIButton>
  );
};

export default Button;
