import { default as MUIMenuItem, MenuItemProps } from "@mui/material/MenuItem";

interface Props extends MenuItemProps {}

const MenuItem: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIMenuItem {...props}>
      {children}
    </MUIMenuItem>
  );
};

export default MenuItem;
