import { default as MUICardActions, CardActionsProps } from "@mui/material/CardActions";

interface Props extends CardActionsProps {}

const CardActions: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUICardActions {...props}>
      {children}
    </MUICardActions>
  );
};

export default CardActions;
