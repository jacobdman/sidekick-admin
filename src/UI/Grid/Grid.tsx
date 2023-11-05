import { forwardRef } from 'react';
import { default as MUIGrid, GridProps } from '@mui/material/Grid';

interface Props extends GridProps<'div', any> {}

const Grid: React.FC<Props> = forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <MUIGrid {...props} ref={ref}>
        {children}
      </MUIGrid>
    );
  }
);

export default Grid;
