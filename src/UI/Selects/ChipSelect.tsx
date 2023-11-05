import { SelectProps as ChipSelectProps } from '@mui/material/Select';
import { SelectProps } from './Select';
import Select from './Select';
import Box from '../Box';
import Chip from '../Chip';
import { SelectOption } from 'types';

interface Props extends ChipSelectProps, SelectProps {
  options?: SelectOption<any>[];
}

const ChipSelect: React.FC<Props> = ({ options, ...props }) => {
  return (
    <Select
      {...props}
      renderValue={selected => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {/* @ts-ignore */}
          {selected?.map((value: any) => (
            <Chip key={value} label={value} />
          ))}
        </Box>
      )}
    />
  );
};

export default ChipSelect;
