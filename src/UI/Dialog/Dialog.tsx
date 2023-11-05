import { default as MUIDialog, DialogProps } from "@mui/material/Dialog";

interface Props extends DialogProps {}

const Dialog: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIDialog {...props}>
      {children}
    </MUIDialog>
  );
};

export default Dialog;
