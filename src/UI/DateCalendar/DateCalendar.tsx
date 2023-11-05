import React from 'react';
import {
  DateCalendar as MuiDateCalendar,
  DateCalendarProps,
} from '@mui/x-date-pickers/DateCalendar';

interface Props extends DateCalendarProps<any> {}

const DateCalendar: React.FC<Props> = props => {
  return <MuiDateCalendar {...props} />;
};

export default DateCalendar;
