import StyledComponentsRegistry from "@/lib/registry";
import { ChakraProviders } from "./ChakraProvider";
import { StyledComponentsProvider } from "./StyledComponentsProvider";
import ThemeRegistry from "./MuiProvider";

export function Providers({children}){
	return (<ThemeRegistry options={{ key: "mui" }}>
		<ChakraProviders>
			<StyledComponentsRegistry>
				<StyledComponentsProvider>
					{children}
				</StyledComponentsProvider>
			</StyledComponentsRegistry>
		</ChakraProviders>
	</ThemeRegistry>);
}