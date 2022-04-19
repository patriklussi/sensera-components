import darkThemeColors from "../themes/darkThemeColors";
import lightThemeColors from "../themes/lightThemeColors/lightThemeColors";


if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
}

let themeMode = localStorage.getItem("theme");

let scrollColor = lightThemeColors.scrollbarColor
let hoverColor = lightThemeColors.scrollbarHover
if(themeMode === "dark"){
    scrollColor = darkThemeColors.scrollbarColor
    hoverColor = darkThemeColors.scrollbarHover
}

const globals = {
    "*, *::before, *::after": {
        margin: 0,
        padding: 0,
    },
    body: {
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue, sans-serif'",
        webkitFontSmoothing: "antialiased",
        mozOsxFontSmoothing: "grayscale",
    },
    code: {
        fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
    },
    '*::-webkit-scrollbar': {
        width: '20px'
    },
    '*::-webkit-scrollbar-thumb': {
        backgroundColor: `${scrollColor}`,
        borderRadius: '20px',
        border: '6px solid transparent',
        backgroundClip: 'content-box'
    },
    '::-webkit-scrollbar-thumb:hover': {
        backgroundColor: `${hoverColor}`
    }
};

export default globals;
