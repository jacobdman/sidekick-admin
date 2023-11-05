import {
  default as MUIRadioGroup,
  RadioGroupProps,
} from '@mui/material/RadioGroup';

interface Props extends RadioGroupProps {}

const RadioGroup: React.FC<Props> = ({ children, ...props }) => {
  return <MUIRadioGroup {...props}>{children}</MUIRadioGroup>;
};

export default RadioGroup;
