import Link from "next/link"
import "../styles/globals.css"
import Navbar from "../components/navbar"

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="w-100">
      <header>
        <Navbar/>
      </header>
      {children}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></script>
      </body>
    </html>
  )
}
