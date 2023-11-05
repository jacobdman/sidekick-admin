import { default as MUIDialogTitle, DialogTitleProps } from "@mui/material/DialogTitle";

interface Props extends DialogTitleProps {}

const DialogTitle: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIDialogTitle {...props}>
      {children}
    </MUIDialogTitle>
  );
};

export default DialogTitle;
