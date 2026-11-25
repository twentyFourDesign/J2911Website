import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const routes = [
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

// Hash routing is only used for static previews that can't rewrite URLs (VITE_HASH_ROUTER=true).
const router = import.meta.env.VITE_HASH_ROUTER === "true" ? createHashRouter(routes) : createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
