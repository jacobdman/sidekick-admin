import { default as MUIBox, BoxProps } from '@mui/material/Box';
import React from 'react';

interface Props extends BoxProps<'button', any> {}

const Box: React.FC<Props> = ({ children, ...props }) => {
  return <MUIBox {...props}>{children}</MUIBox>;
};

export default Box;
