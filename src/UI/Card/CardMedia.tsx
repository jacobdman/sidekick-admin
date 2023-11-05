import {
  default as MUICardMedia,
  CardMediaProps,
} from '@mui/material/CardMedia';

interface Props extends CardMediaProps<'img', any> {}

const CardMedia: React.FC<Props> = ({ children, ...props }) => {
  return <MUICardMedia {...props}>{children}</MUICardMedia>;
};

export default CardMedia;
