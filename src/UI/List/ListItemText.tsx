import { default as MUIListItemText, ListItemTextProps } from "@mui/material/ListItemText";

interface Props extends ListItemTextProps {}

const ListItemText: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIListItemText {...props}>
      {children}
    </MUIListItemText>
  );
};

export default ListItemText;
