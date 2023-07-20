import './globals.css'
import { Poppins } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry';
import { ChakraProviders } from './providers/ChakraProvider';

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
            <body className={poppins.variable}>
                {children}
            </body>
        </StyledComponentsRegistry>
      </ChakraProviders>
    </html>
  )
}
