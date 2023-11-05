import { default as MUIDialogActions, DialogActionsProps } from "@mui/material/DialogActions";

interface Props extends DialogActionsProps {}

const DialogActions: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIDialogActions {...props}>
      {children}
    </MUIDialogActions>
  );
};

export default DialogActions;
