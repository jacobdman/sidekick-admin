import { default as MUIListItemButton, ListItemButtonProps } from "@mui/material/ListItemButton";

interface Props extends ListItemButtonProps<'button', any> {}

const ListItemButton: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIListItemButton {...props}>
      {children}
    </MUIListItemButton>
  );
};

export default ListItemButton;
