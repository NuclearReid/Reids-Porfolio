import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './utils/cursor.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import Error from './pages/Error.jsx';
import Contact from './pages/ContactMe.jsx';
import About from './pages/about.jsx';
// import HomeTest from './pages/HomeTest.jsx';
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      // {
      //   path: '/about',
      //   element: <About />,
      // },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact',
        element: <Contact />,
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
