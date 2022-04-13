interface IPrimaryColorProps {
  main: string;
  light: string;
  lighter?: string;
  dark: string;
  darker?: string;
  contrastText: string;
}

interface ITheme {
  common: {
    black: string;
    white: string;
  };
  toolbar: string;
  drawer: string;
  listItemSelected: string;
  inputFilled: string;
  inputHover: string;
  form: string;
  tableHead: string;
  tableBody: string;
  
  primary: IPrimaryColorProps;
  secondary: IPrimaryColorProps;
  error: IPrimaryColorProps;
  warning: IPrimaryColorProps;
  info: IPrimaryColorProps;
  success: IPrimaryColorProps;

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
