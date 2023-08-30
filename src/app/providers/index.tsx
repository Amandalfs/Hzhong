import StyledComponentsRegistry from "@/lib/registry";
import { ChakraProviders } from "./ChakraProvider";
import { StyledComponentsProvider } from "./StyledComponentsProvider";
import ThemeRegistry from "./MuiProvider";
import { CookiesContextProvider } from "../contexts/cookiesContext";
import { UserStaticHistoryContextProvider } from "../contexts/userStaticHistoryContext";

export function Providers({children}){
	return (<ThemeRegistry options={{ key: "mui" }}>
		<ChakraProviders>
			<StyledComponentsRegistry>
				<StyledComponentsProvider>
					<CookiesContextProvider>
						<UserStaticHistoryContextProvider>
							{children}
						</UserStaticHistoryContextProvider>
					</CookiesContextProvider>
				</StyledComponentsProvider>
			</StyledComponentsRegistry>
		</ChakraProviders>
	</ThemeRegistry>);
}