import {
  default as MUIFormLabel,
  FormLabelProps,
} from '@mui/material/FormLabel';

interface Props extends FormLabelProps {}

const FormLabel: React.FC<Props> = ({ children, ...props }) => {
  return <MUIFormLabel {...props}>{children}</MUIFormLabel>;
};

export default FormLabel;
