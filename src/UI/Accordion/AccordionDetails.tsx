import { default as MUIAccordionDetails, AccordionDetailsProps } from "@mui/material/AccordionDetails";

interface Props extends AccordionDetailsProps {}

const AccordionDetails: React.FC<Props> = ({ children, ...props }) => {
  return (
    <MUIAccordionDetails {...props}>
      {children}
    </MUIAccordionDetails>
  );
};

export default AccordionDetails;
