import StyledComponentsRegistry from "@/lib/registry";
import { ChakraProviders } from "./ChakraProvider";
import { StyledComponentsProvider } from "./StyledComponentsProvider";
import ThemeRegistry from "./MuiProvider";
import { CookiesContextProvider } from "../contexts/cookiesContext";
import { UserStaticHistoryContextProvider } from "../contexts/userStaticHistoryContext";
import { UserInfosContextProvider } from "../contexts/userInfosContext";
import { ExtractsContextProvider } from "../contexts/extractsContext/extractsContext";
import { GraficExtractsContextProvider } from "../contexts/graficExtractsContext/graficExtractsContext";

export function Providers({children}){
	return (<ThemeRegistry options={{ key: "mui" }}>
		<ChakraProviders>
			<StyledComponentsRegistry>
				<StyledComponentsProvider>
					<CookiesContextProvider>
						<UserStaticHistoryContextProvider>
							<UserInfosContextProvider>
								<ExtractsContextProvider>
									<GraficExtractsContextProvider>
										{children}
									</GraficExtractsContextProvider>
								</ExtractsContextProvider>
							</UserInfosContextProvider>
						</UserStaticHistoryContextProvider>
					</CookiesContextProvider>
				</StyledComponentsProvider>
			</StyledComponentsRegistry>
		</ChakraProviders>
	</ThemeRegistry>);
}