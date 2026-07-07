import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";



export default function () {
  const routeObj = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/menu", element: <Menu /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/Services", element: <Services /> },


  ])

  return (
    <>
      <main className="lg:pt-[170px] pt-[300px]">
        <RouterProvider router={routeObj} />
        </main>
    </>
  )
}