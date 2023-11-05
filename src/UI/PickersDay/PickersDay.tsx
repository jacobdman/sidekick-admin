import React from 'react';
import {
  PickersDay as MuiPickersDay,
  PickersDayProps,
} from '@mui/x-date-pickers/PickersDay';

export interface Props extends PickersDayProps<any> {}

const PickersDay: React.FC<Props> = props => {
  return <MuiPickersDay {...props} />;
};

export default PickersDay;
