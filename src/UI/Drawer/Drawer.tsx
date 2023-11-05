import { default as MUIDrawer, DrawerProps } from "@mui/material/Drawer";

interface Props extends DrawerProps {}

const Drawer: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIDrawer {...props}>
      {children}
    </MUIDrawer>
  );
};

export default Drawer;
