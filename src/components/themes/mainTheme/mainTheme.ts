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
  dark: ITheme = darkThemeColors,
  light: ITheme = lightThemeColors
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
              ? { backgroundColor: light.grey["300"] }
              : { backgroundColor: dark.grey["800"] },
        },
      },
      MuiDrawer: {
        defaultProps: {
          PaperProps: {
            sx:
              themeMode === "light"
                ? { backgroundColor: light.grey["300"] }
                : { backgroundColor: dark.grey["800"] },
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
                ? { backgroundColor: light.grey[300] }
                : { backgroundColor: light.grey[700] },
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
              themeMode === "light" ? light.grey["300"] : dark.grey["800"],
            ":hover": {
              backgroundColor:
                themeMode === "light" ? light.grey["300"] : dark.grey["800"],
            },
          },
        },
      },
      MuiFormControl: {
        defaultProps: {
          sx: {
            backgroundColor:
              themeMode === "light" ? light.grey["300"] : dark.grey["800"],
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
              themeMode === "light" ? light.grey["100"] : dark.grey["1000"],
          },
        },
      },
      MuiTableBody: {
        defaultProps: {
          sx: {
            backgroundColor:
              themeMode === "light" ? light.common.white : dark.grey["900"],
          },
        },
      },
    },
  });
};

export default mainTheme;
