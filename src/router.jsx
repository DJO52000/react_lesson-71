import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/store", element: <Store /> },
    { path: "/about", element: <About /> },
])

//OTHER TYPES OF ROUTER: createHashRouter//when you don't have option to change url
//createMemoryRouter//only for testing, does not change link..about all time

//OLD WAY

// export const router = createBrowserRouter(
    
//     createRoutesFromElements(//don't forget to import it in react-router-dom
//          <>
//            <Route path="/"  element={<Home />} />
//            <Route path="/about"  element={<About />} />
//            <Route path="/store"  element={<Store />} />
//          </>
// ))