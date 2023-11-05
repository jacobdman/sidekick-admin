import { default as MUIAvatar, AvatarProps } from "@mui/material/Avatar";

interface Props extends AvatarProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

const Avatar: React.FC<Props> = ({
  children,
  alt,
  sx,
  ...props
}) => {
  const stringForAvatar = typeof children === "string" ? children : alt;

  const defaultStyle = {
    bgcolor: stringToColor(stringForAvatar ?? ""),
  };

  return (
    <MUIAvatar sx={{ ...defaultStyle, ...sx }} {...props}>
      {children}
    </MUIAvatar>
  );
};

export default Avatar;
