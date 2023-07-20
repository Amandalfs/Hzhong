import StyledComponentsRegistry from "@/lib/registry";
import { ChakraProviders } from "./ChakraProvider";
import { StyledComponentsProvider } from "./StyledComponentsProvider";

export function Providers({children}){
    return (<ChakraProviders>
        <StyledComponentsRegistry>
          <StyledComponentsProvider>
                {children}
          </StyledComponentsProvider>
        </StyledComponentsRegistry>
      </ChakraProviders>)
}