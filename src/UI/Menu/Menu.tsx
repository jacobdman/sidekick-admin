import { default as MUIMenu, MenuProps } from "@mui/material/Menu";

interface Props extends MenuProps {}

const Menu: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIMenu {...props}>
      {children}
    </MUIMenu>
  );
};

export default Menu;
