import { default as MUIIconButton, IconButtonProps } from "@mui/material/IconButton";

interface Props extends IconButtonProps {}

const IconButton: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIIconButton {...props}>
      {children}
    </MUIIconButton>
  );
};

export default IconButton;
