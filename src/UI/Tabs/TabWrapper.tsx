import { default as MUITab, TabProps } from '@mui/material/Tab';

interface Props extends TabProps {}

const TabWrapper: React.FC<Props> = ({ ...props }) => {
  return <MUITab {...props} />;
};

export default TabWrapper;
