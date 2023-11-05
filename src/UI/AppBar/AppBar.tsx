import { default as MUIAppBar, AppBarProps } from '@mui/material/AppBar';
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';

interface Props extends AppBarProps {
  toolBarProps?: ToolbarProps<'div', any>;
}

const AppBar: React.FC<Props> = ({ children, toolBarProps = {}, ...props }) => {
  return (
    <MUIAppBar {...props}>
      <Toolbar {...toolBarProps}>{children}</Toolbar>
    </MUIAppBar>
  );
};

export default AppBar;
