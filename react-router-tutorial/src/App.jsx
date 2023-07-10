import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// Components
import Nav from "./components/Nav";

// This will be on every page
const HeaderLayout = () => (
  <div>
    <Nav />
    <Outlet />
  </div>
);

// this will be on every page
const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    // root component - will be the same on every "page"
    children: [
      { path: "/", element: <HomePage />},
      { path: "/about", element: <AboutPage />},
      { path: "/contact", element: <ContactPage />},
    // nav is always on the top because this is the base app
    ],
  },
]);

function App () {
  return <RouterProvider router={router} />;
}

export default App;