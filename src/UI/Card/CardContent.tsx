import { default as MUICardContent, CardContentProps } from "@mui/material/CardContent";

interface Props extends CardContentProps {}

const CardContent: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUICardContent {...props}>
      {children}
    </MUICardContent>
  );
};

export default CardContent;
