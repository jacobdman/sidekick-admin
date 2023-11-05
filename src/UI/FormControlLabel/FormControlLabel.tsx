import { default as MUIFormControlLabel, FormControlLabelProps } from "@mui/material/FormControlLabel";

interface Props extends FormControlLabelProps {}

const FormControlLabel: React.FC<Props> = ({ ...props }) => {
  return (
    <MUIFormControlLabel {...props} />
  );
};

export default FormControlLabel;
