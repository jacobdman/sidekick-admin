import { forwardRef } from 'react';
import { default as MUIStack, StackProps } from '@mui/material/Stack';

interface Props extends StackProps<'div', any> {}

const Stack: React.FC<Props> = forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <MUIStack {...props} ref={ref}>
        {children}
      </MUIStack>
    );
  }
);

export default Stack;
