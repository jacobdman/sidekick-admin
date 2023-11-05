import { default as MUICard, CardProps } from "@mui/material/Card";

interface Props extends CardProps {}

const Card: React.FC<Props> = ({ children, ...props }) => {
  return <MUICard {...props}>{children}</MUICard>;
};

export default Card;
