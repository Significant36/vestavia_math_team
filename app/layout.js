import './globals.css'

export const metadata = {
  title: 'Vestavia Hills Math Team',
  description: 'Empowering minds through mathematical excellence and competitive spirit',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}