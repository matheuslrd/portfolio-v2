import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from 'src/pages/Home';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about-me',
      element: <AboutMe />,
    },
    {
      path: '/skills',
      element: <Skills />,
    },
  ]);

  return <RouterProvider router={router} />;
}
