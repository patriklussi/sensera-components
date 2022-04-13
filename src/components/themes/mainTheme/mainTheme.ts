import { createTheme } from "@mui/material";

/* import lightThemeColors from "../lightThemeColors";
import darkThemeColors from "../darkThemeColors"; */
import breakpoints from "../../breakpoints";
import globals from "../../globals/globals";
import container from "../../container";
import lightThemeColors from "../lightThemeColors";
import darkThemeColors from "../darkThemeColors";
import createShadow from "../../shadows";
if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
}

let themeMode = localStorage.getItem("theme");

const provideColorTheme = () => {
  if (themeMode === "light") {
    return { ...lightThemeColors };
  } else if (themeMode === "dark") {
    return { ...darkThemeColors };
  }
};

const mainTheme = (
  light: ITheme = lightThemeColors,
  dark: ITheme = darkThemeColors
) => {
  return createTheme({
    // @ts-ignore
    palette: provideColorTheme(),
    typography: {},
    breakpoints: { ...breakpoints },
    shape: {},
    // @ts-ignore
    shadows: createShadow(provideColorTheme().primary.main),
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ...globals,
          ...container,
        },
      },
      MuiContainer: {
        defaultProps: {
          sx:
            themeMode === "light"
              ? { backgroundColor: light.background.paper }
              : { backgroundColor: dark.background.paper },
        },
      },
      MuiGrid: { defaultProps: {} },
      MuiPaper: {
        defaultProps: {
          elevation: themeMode === "light" ? 1 : 5,
        },
      },
      MuiCard: {
        defaultProps: {
          elevation: themeMode === "light" ? 2 : 5,
        },
      },
      MuiToolbar: {
        defaultProps: {
          sx:
            themeMode === "light"
              ? { backgroundColor: light.toolbar }
              : { backgroundColor: dark.toolbar  },
        },
      },
      MuiDrawer: {
        defaultProps: {
          PaperProps: {
            sx:
              themeMode === "light"
                ? { backgroundColor: light.drawer }
                : { backgroundColor: dark.drawer },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
      },
      MuiToggleButton: {
        defaultProps: {
          /* sx: {border: `1px solid ${(themeMode === "light") ? light.info.main : dark.success.main}`}*/
        },
      },
      MuiListItemButton: {
        defaultProps: {
          sx: {
            "&.Mui-selected":
              themeMode === "light"
                ? { backgroundColor: light.listItemSelected }
                : { backgroundColor: light.listItemSelected },
          },
        },
      },
      MuiAlert: {
        defaultProps: {
          elevation: 1,
          sx: {
            backgroundColor:
              themeMode === "light"
                ? light.success.lighter
                : dark.success.darker,
            "& .MuiAlert-message": {
              color:
                themeMode === "light" ? light.common.black : dark.text.primary,
            },
          },
        },
      },
      MuiFilledInput: {
        defaultProps: {
          sx: {
            backgroundColor:
              themeMode === "light" ? light.inputFilled : dark.inputFilled,
            ":hover": {
              backgroundColor:
                themeMode === "light" ? light.inputHover : dark.inputHover,
            },
          },
        },
      },
      MuiFormControl: {
        defaultProps: {
          sx: {
            backgroundColor:
              themeMode === "light" ? light.form : dark.form,
          },
        },
      },
      MuiLink: { defaultProps: { underline: "hover" } },
      MuiAccordion: {
        defaultProps: {
          sx: {
            border:
              themeMode === "light"
                ? `1px solid ${light.divider}`
                : `1px solid ${dark.divider}`,
          },
        },
      },
      MuiTableHead: {
        defaultProps: {
          sx: {
            backgroundColor:
              themeMode === "light" ? light.tableHead : dark.tableHead,
          },
        },
      },
      MuiTableBody: {
        defaultProps: {
          sx: {
            backgroundColor:
              themeMode === "light" ? light.tableBody : dark.tableBody,
          },
        },
      },
    },
  });
};

export default mainTheme;
