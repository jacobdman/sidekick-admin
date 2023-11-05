import { default as MUIImageList, ImageListProps } from "@mui/material/ImageList";

interface Props extends ImageListProps {}

const ImageList: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIImageList {...props}>
      {children}
    </MUIImageList>
  );
};

export default ImageList;
