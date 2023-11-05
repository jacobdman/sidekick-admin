import {
  default as MuiPhoneNumber2,
  MuiPhoneNumberProps,
} from 'material-ui-phone-number-2';

type Props = MuiPhoneNumberProps & {
  isValid?: (value: string) => void;
};

const MuiPhoneNumber: React.FC<Props> = ({ ...props }) => {
  return <MuiPhoneNumber2 {...props} />;
};

export default MuiPhoneNumber;
