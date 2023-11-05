import { default as MUIInputAdornment, InputAdornmentProps } from "@mui/material/InputAdornment";

interface Props extends InputAdornmentProps {}

const InputAdornment: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIInputAdornment {...props}>
      {children}
    </MUIInputAdornment>
  );
};

export default InputAdornment;
