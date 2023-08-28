"use client";
import { defaultTheme } from "@/app/styles/themes/DefaultTheme";
import { ThemeProvider } from "styled-components";

export function StyledComponentsProvider({children}){
	return (<ThemeProvider theme={defaultTheme}>
		{children}
	</ThemeProvider>);
}