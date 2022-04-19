import React from "react";
import { Meta, Story } from "@storybook/react";
import { Header, Iprops } from "../components/root/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import { mainTheme } from "../components";
import { mockData } from "../components/root/Header/MockData"
import testLocal from "../components/themes/lightThemeColors/testLocal"
let theme = mainTheme(testLocal)

const meta: Meta = {
    title: "Header",
    component: Header,


}

export default meta;
/* const Template: Story<Iprops> = (args) =>  <ThemeProvider theme={theme}><RootModelProvider><Router><Header {...args} /></Router></RootModelProvider></ThemeProvider> */
export const Student = () => <ThemeProvider theme={theme}><Router><Header  rootData={mockData} portal="student" LinkToChatView={() => { return "" }} LinkToHome={() => { return "" }} LinkToProfileMainView={() => { return "" }} /></Router></ThemeProvider>
export const Teacher = () => <Header rootData={mockData} portal="teacher" LinkToChatView={() => { return "" }} LinkToHome={() => { return "" }} LinkToProfileMainView={() => { return "" }} />
export const Admin = () => <ThemeProvider theme={theme}><div><Header rootData={mockData} portal="admin" LinkToChatView={() => { return "" }} LinkToHome={() => { return "" }} LinkToProfileMainView={() => { return "" }} /></div></ThemeProvider>
