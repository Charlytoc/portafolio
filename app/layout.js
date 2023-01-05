
import "../styles/globals.css"
import Navbar from "./components/navbar"
import Menu from "./components/menu"

export default function RootLayout({ children }) {
  


  return (
    <html>
      <head />
      <body className="w-100">
    <div className="saludo-inicio"></div>
    <div style={{display: 'none'}} id="menu">
      <Menu />
    </div>
    <div id="mr-all" >
        <Navbar/>
      <div className="body2">
      {children}</div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></script>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  )
}
