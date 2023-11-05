export type RouteTheme = React.FC<React.PropsWithChildren<{}>>;
export interface ThemeOverrides {
  status?: {
    danger?: string;
  };
  maxHeight: number | string;
  borderRadius: { 
    default?: string | number;
    circle?: string | number;
    button?: string | number;
   };
}

export interface PaletteOverrides {
  neutral?: { main: string; contrastText: string };
}