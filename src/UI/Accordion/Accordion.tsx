import { default as MUIAccordion, AccordionProps } from "@mui/material/Accordion";

interface Props extends AccordionProps {}

const Accordion: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIAccordion {...props}>
      {children}
    </MUIAccordion>
  );
};

export default Accordion;
