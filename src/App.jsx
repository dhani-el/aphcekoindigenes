import { createBrowserRouter,RouterProvider } from "react-router-dom"

import Home from "./Home/home";
import Contact from "./Contact/contact";
import AboutUs from "./About/about";
import Join from "./Join/join";

const route = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/about",
    element:<AboutUs/>
  },
  {
    path:"/join",
    element:<Join/>
  },

])


function App() {

  return <RouterProvider router={route}/>
}

export default App
