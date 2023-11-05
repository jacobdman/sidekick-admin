import { SelectChangeEvent as MUISelectChangeEvent } from '@mui/material/Select';

export interface SelectOption<ValueType> {
  value: ValueType | any;
  label: string;
}

export type SelectChangeEvent = MUISelectChangeEvent;