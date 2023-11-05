import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { default as MUISelect, SelectProps } from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import { Controller, Control } from 'react-hook-form';

interface SelectOption {
  label: React.ReactNode;
  value: any;
}

interface Props extends SelectProps {
  label: React.ReactNode;
  control?: Control<any>;
  value?: any;
  name: string;
  options: SelectOption[];
}

const Select: React.FC<Props> = ({
  label,
  control,
  name,
  options,
  ...selectProps
}) => {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Controller
          name={name}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <MUISelect
              {...selectProps}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
            >
              {options.map(({ value, label }) => (
                <MenuItem value={value}>{label}</MenuItem>
              ))}
            </MUISelect>
          )}
          control={control}
        />
      </FormControl>
    </>
  );
};

export default Select;
