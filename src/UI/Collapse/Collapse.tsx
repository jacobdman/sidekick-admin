import { default as MUICollapse, CollapseProps } from "@mui/material/Collapse";

interface Props extends CollapseProps {}

const Collapse: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUICollapse {...props}>
      {children}
    </MUICollapse>
  );
};

export default Collapse;
