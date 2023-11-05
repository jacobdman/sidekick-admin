import { default as MUIListItemIcon, ListItemIconProps } from "@mui/material/ListItemIcon";

interface Props extends ListItemIconProps {}

const ListItemIcon: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIListItemIcon {...props}>
      {children}
    </MUIListItemIcon>
  );
};

export default ListItemIcon;
