import './globals.css'
import { Poppins } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry';
import { ChakraProviders } from './providers/ChakraProvider';
import { StyledComponentsProvider } from './providers/StyledComponentsProvider';

const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: '500' });

export const metadata = {
  title: 'Banco Hzhong',
  description:
    'O melhor banco',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <ChakraProviders>
        <StyledComponentsRegistry>
          <StyledComponentsProvider>
            <body className={poppins.variable}>
                {children}
            </body>
          </StyledComponentsProvider>
        </StyledComponentsRegistry>
      </ChakraProviders>
    </html>
  )
}
