import {
  default as MUIFormHelperText,
  FormHelperTextProps,
} from '@mui/material/FormHelperText';

interface Props extends FormHelperTextProps {}

const FormHelperText: React.FC<Props> = ({ children, ...props }) => {
  return <MUIFormHelperText {...props}>{children}</MUIFormHelperText>;
};

export default FormHelperText;
