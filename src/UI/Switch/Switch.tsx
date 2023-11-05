import { default as MUISwitch, SwitchProps } from "@mui/material/Switch";

interface Props extends SwitchProps {}

const Switch: React.FC<Props> = ({ ...props }) => {
  return (
    <MUISwitch {...props} />
  );
};

export default Switch;
