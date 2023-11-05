import { default as MUISelect, SelectProps as MUISelectProps } from '@mui/material/Select';
import { MenuItem } from '../Menu';
import { SelectOption } from 'types';

export interface SelectProps extends MUISelectProps {
  options?: SelectOption<any>[];
  shrink?: boolean;
  register?: any;
  errorMessage?: string;
}

const Select: React.FC<SelectProps> = ({
  children,
  register = () => {},
  required,
  options,
  errorMessage,
  ...props
}) => {
  
  const registerOptions = {
    required: required ? 'This field is required.' : false,
  };
  const inputProps = {
    ...props.inputProps,
    ...register(props.name, registerOptions),
  };
  if (errorMessage) {
    props.error = Boolean(errorMessage);
  }

  // Default prop overrides
  props.fullWidth = props.fullWidth ?? true;

  return (
    <MUISelect label="this is a test" {...props} inputProps={inputProps}>
      {options?.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </MUISelect>
  );
};

export default Select;
