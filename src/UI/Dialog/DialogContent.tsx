import { default as MUIDialogContent, DialogContentProps } from "@mui/material/DialogContent";

interface Props extends DialogContentProps {}

const DialogContent: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIDialogContent {...props}>
      {children}
    </MUIDialogContent>
  );
};

export default DialogContent;
