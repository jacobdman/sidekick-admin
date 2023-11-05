import { default as MUIList, ListProps } from "@mui/material/List";

interface Props extends ListProps {}

const List: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIList {...props}>
      {children}
    </MUIList>
  );
};

export default List;
