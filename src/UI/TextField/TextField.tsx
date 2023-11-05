import {
  default as MUITextField,
  TextFieldProps,
} from '@mui/material/TextField';

type Props = Partial<TextFieldProps> & {
  shrink?: boolean;
  register?: any;
  errorMessage?: string;
};

const TextField: React.FC<Props> = ({
  children,
  register = () => {},
  required,
  errorMessage,
  ...props
}) => {
  props.variant = props.variant || 'outlined';
  props.fullWidth = props.fullWidth ?? true;

  const registerOptions = {
    required: required ? 'This field is required.' : false,
  };

  const inputProps = {
    ...props.inputProps,
    ...register(props.name, registerOptions),
  };

  const InputLabelProps = {
    ...props.InputLabelProps,
  };

  if (Boolean(props.value || props.shrink)) {
    InputLabelProps.shrink = Boolean(props.value || props.shrink)
  }

  if (errorMessage) {
    props.error = Boolean(errorMessage);
    props.helperText = errorMessage;
  }

  return (
    <MUITextField {...props} inputProps={inputProps} InputLabelProps={InputLabelProps}>
      {children}
    </MUITextField>
  );
};

export default TextField;
