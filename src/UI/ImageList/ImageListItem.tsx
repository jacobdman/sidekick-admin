import { default as MUIImageListItem, ImageListItemProps } from "@mui/material/ImageListItem";

interface Props extends ImageListItemProps {}

const ImageListItem: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIImageListItem {...props}>
      {children}
    </MUIImageListItem>
  );
};

export default ImageListItem;
