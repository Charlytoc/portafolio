import Link from "next/link"
import "../styles/globals.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="w-100">
      <header>
        <nav>ESTE SERÁ EL NAVBAR</nav>
      </header>
    
      <Link href="/about">ABOUT</Link>
      {children}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></script>
      </body>
    </html>
  )
}
