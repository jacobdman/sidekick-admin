import { default as MUICheckbox, CheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

interface Props extends CheckboxProps {
  label?: string;
}

const Checkbox: React.FC<Props> = ({ label, ...props }) => {
  return label ? (
    <FormControlLabel control={<MUICheckbox {...props} />} label={label} />
  ) : (
    <MUICheckbox {...props} />
  );
};

export default Checkbox;
