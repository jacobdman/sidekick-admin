import { default as MUIDivider, DividerProps } from "@mui/material/Divider";

interface Props extends DividerProps {}

const Divider: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIDivider {...props}>
      {children}
    </MUIDivider>
  );
};

export default Divider;
