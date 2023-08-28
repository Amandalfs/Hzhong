import StyledComponentsRegistry from "@/lib/registry";
import { ChakraProviders } from "./ChakraProvider";
import { StyledComponentsProvider } from "./StyledComponentsProvider";
import ThemeRegistry from "./MuiProvider";
import { CookiesContextProvider } from "../contexts/cookiesContext";

export function Providers({children}){
	return (<ThemeRegistry options={{ key: "mui" }}>
		<ChakraProviders>
			<StyledComponentsRegistry>
				<StyledComponentsProvider>
					<CookiesContextProvider>
						{children}
					</CookiesContextProvider>
				</StyledComponentsProvider>
			</StyledComponentsRegistry>
		</ChakraProviders>
	</ThemeRegistry>);
}