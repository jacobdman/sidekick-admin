import { default as MUIContainer, ContainerProps } from "@mui/material/Container";

interface Props extends ContainerProps {}

const Container: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIContainer {...props}>
      {children}
    </MUIContainer>
  );
};

export default Container;
