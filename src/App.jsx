import { Navbar } from "./Navbar"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"

function App() {
  let component
  switch(window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/store":
      component = <Store />
      break
  }
  return <>
    <Navbar />
    {component}
  </>
}

export default App
