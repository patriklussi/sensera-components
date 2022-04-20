import { createTheme } from "@mui/material";
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

const mainTheme = (
  light: ITheme = lightThemeColors,
  dark: ITheme = darkThemeColors
) => {
  let chosen = { ...light };
  if (themeMode === "dark") {
    chosen = { ...dark };
  }
  return createTheme({
    // @ts-ignore
    palette: chosen,
    typography: {},
    breakpoints: { ...breakpoints },
    shape: {},
    // @ts-ignore
    shadows: createShadow(chosen.primary.main),
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ...globals,
          ...container,
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: `${chosen.scrollbarColor}`,
            borderRadius: "20px",
            border: "6px solid transparent",
            backgroundClip: "content-box",
          },
          "::-webkit-scrollbar-thumb:hover": {
            backgroundColor: `${chosen.scrollbarHover}`,
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          sx: { backgroundColor: chosen.background.paper },
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
          sx: { backgroundColor: chosen.toolbar },
        },
      },
      MuiDrawer: {
        defaultProps: {
          PaperProps: {
            sx: { backgroundColor: chosen.drawer },
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
            "&.Mui-selected": { backgroundColor: chosen.listItemSelected },
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
            backgroundColor: chosen.inputFilled,
            ":hover": {
              backgroundColor: chosen.inputHover,
            },
          },
        },
      },
      MuiFormControl: {
        defaultProps: {
          sx: {
            backgroundColor: chosen.form,
          },
        },
      },
      MuiLink: { defaultProps: { underline: "hover" } },
      MuiAccordion: {
        defaultProps: {
          sx: {
            border: `1px solid ${chosen.divider}`,
          },
        },
      },
      MuiTableHead: {
        defaultProps: {
          sx: {
            backgroundColor: chosen.tableHead,
          },
        },
      },
      MuiTableBody: {
        defaultProps: {
          sx: {
            backgroundColor: chosen.tableBody,
          },
        },
      },
    },
  });
};

export default mainTheme;
