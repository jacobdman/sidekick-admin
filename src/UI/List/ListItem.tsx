import { default as MUIListItem, ListItemProps } from "@mui/material/ListItem";

interface Props extends ListItemProps {}

const ListItem: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIListItem {...props}>
      {children}
    </MUIListItem>
  );
};

export default ListItem;
