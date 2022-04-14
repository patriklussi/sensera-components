import React from "react";
import { Meta, Story } from "@storybook/react";
import { Header, Iprops } from "../components/root/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { RootModelProvider } from "../components/root/Header/Context";
import { ThemeProvider } from "@mui/system";
import { mainTheme } from "../components";
let theme = mainTheme()

const meta: Meta = {
    title: "Header",
    component: Header,


}

export default meta;
/* const Template: Story<Iprops> = (args) =>  <ThemeProvider theme={theme}><RootModelProvider><Router><Header {...args} /></Router></RootModelProvider></ThemeProvider> */
export const Student = () => <ThemeProvider theme={theme}><RootModelProvider><Router><Header portal="admin" LinkToChatView={() => { return "" }} LinkToHome={() => { return "" }} LinkToProfileMainView={() => { return "" }} /></Router></RootModelProvider></ThemeProvider>
export const Teacher = () => <ThemeProvider theme={theme}><RootModelProvider><Router><Header portal="admin" LinkToChatView={() => { return "" }} LinkToHome={() => { return "" }} LinkToProfileMainView={() => { return "" }} /></Router></RootModelProvider></ThemeProvider>
export const Admin = () => <ThemeProvider theme={theme}><RootModelProvider><Router><Header portal="admin" LinkToChatView={() => { return "" }} LinkToHome={() => { return "" }} LinkToProfileMainView={() => { return "" }} /></Router></RootModelProvider></ThemeProvider>
