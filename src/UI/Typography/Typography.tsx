import {
  default as MUITypography,
  TypographyProps,
} from "@mui/material/Typography";

interface Props extends TypographyProps {}

const Typography: React.FC<Props> = ({ children, ...props }) => {
  return <MUITypography {...props}>{children}</MUITypography>;
};

export default Typography;
