import { default as MUITabs, TabsProps } from '@mui/material/Tabs';

interface Props extends TabsProps {}

const TabsWrapper: React.FC<Props> = ({ children, ...props }) => {
  return <MUITabs {...props}>{children}</MUITabs>;
};

export default TabsWrapper;
