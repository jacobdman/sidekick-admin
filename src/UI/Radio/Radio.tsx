import { default as MUIRadio, RadioProps } from '@mui/material/Radio';

interface Props extends RadioProps {}

const Switch: React.FC<Props> = ({ ...props }) => {
  return <MUIRadio {...props} />;
};

export default Switch;
