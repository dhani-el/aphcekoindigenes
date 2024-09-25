import { createBrowserRouter,RouterProvider } from "react-router-dom"

import Home from "./Home/home"
import Contact from "./Contact/contact"

const route = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },

])


function App() {

  return <RouterProvider router={route}/>
}

export default App
