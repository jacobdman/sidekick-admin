// UI
import TabsWrapper from './TabsWrapper';
import TabWrapper from './TabWrapper';
// Types
import { TabsProps } from '@mui/material/Tabs';
import { TabProps } from '@mui/material/Tab';

interface Props extends TabsProps {
  tabs: TabProps[];
}

const Tabs: React.FC<Props> = ({ children, ...props }) => {
  const tabs = props.tabs.map(tabOptions => <TabWrapper {...tabOptions} />);
  return <TabsWrapper {...props}>{tabs}</TabsWrapper>;
};

export default Tabs;
