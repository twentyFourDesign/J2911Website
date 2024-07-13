import './App.css';
import Home from './views/home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Services from './views/services';
import About from './views/about';
import ContactUs from './views/contact';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "services",
      element: <Services />,
    },
    {
      path: "contact",
      element: <ContactUs />,
    },
    {
      path: "about",
      element: <About />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
