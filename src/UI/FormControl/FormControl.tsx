import {
  default as MUIFormControl,
  FormControlProps,
} from '@mui/material/FormControl';

interface Props extends FormControlProps {}

const FormControl: React.FC<Props> = ({ children, ...props }) => {
  return <MUIFormControl {...props}>{children}</MUIFormControl>;
};

export default FormControl;
