import {
  default as MUIAutocomplete,
  AutocompleteProps,
} from '@mui/material/Autocomplete';

interface Props
  extends AutocompleteProps<any, boolean, undefined, boolean, any> {}

const Autocomplete: React.FC<Props> = ({ ...props }) => {
  return <MUIAutocomplete {...props} />;
};

export default Autocomplete;
