import './globals.css'

export const metadata = {
  title: 'My Fund ',
  description: 'My Fund Home page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
