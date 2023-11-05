import { default as MUIAccordionSummary, AccordionSummaryProps } from "@mui/material/AccordionSummary";

interface Props extends AccordionSummaryProps {}

const AccordionSummary: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIAccordionSummary {...props}>
      {children}
    </MUIAccordionSummary>
  );
};

export default AccordionSummary;
