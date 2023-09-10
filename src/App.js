import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeGpt from "./pages/HomeGpt";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/AboutPage";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeGpt></HomeGpt>,
    },
    {
      path: "/contact",
      element: <Contact></Contact>,
    },
    {
      path: "/about",
      element: <About></About>,
    },
    {
      path: "/services",
      element: <ServicesPage></ServicesPage>,
    },
  ]);
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
    
}
