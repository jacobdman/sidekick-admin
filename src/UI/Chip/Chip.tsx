import { default as MUIChip, ChipProps } from "@mui/material/Chip";

interface Props extends ChipProps {}

const Chip: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIChip {...props}>
      {children}
    </MUIChip>
  );
};

export default Chip;
