import './globals.css'
import { Poppins } from 'next/font/google'
import { Providers } from './providers';

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
        <body className={poppins.variable}>
          <Providers>
            {children}
          </Providers>
        </body>
    </html>
  )
}
