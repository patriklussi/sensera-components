interface IPrimaryColorProps {
  main: string;
  light: string;
  lighter?:string;
  dark: string;
  darker?: string;
  contrastText: string;
}

interface ITheme {
  common: {
    black: string;
    white: string;
  };
  primary: IPrimaryColorProps;
  secondary: IPrimaryColorProps;
  error: IPrimaryColorProps;
  warning: IPrimaryColorProps;
  info: IPrimaryColorProps;
  success: IPrimaryColorProps;
  grey: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    1000?: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    icon?: string;
    divider?: string;
  };

  divider: string;

  background: {
    paper: string;
    default: string;
  };

  action: {
    active: string;
    hover: string;
    hoverOpacity: string;
    selected: string;
    selectedOpacity: string;
    disabled: string;
    disabledBackground: string;
    disabledOpacity: string;
    focus: string;
    focusOpacity: string;
    activatedOpacity: string;
  };
}
