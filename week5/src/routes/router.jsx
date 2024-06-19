import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout';
import Home from '../pages/home';
import UpComing from '../pages/upcoming';
import Nowplaying from '../pages/now-playing';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
        children: [
          {
            path: ':movieId',
            element: <Home />,
          },
        ],
      },
      {
        path: 'coming-soon',
        element: <UpComing />,
        children: [
          {
            path: ':movieId',
            element: <UpComing />,
          },
        ],
      },
      {
        path: 'now-playing',
        element: <Nowplaying />,
        children: [
          {
            path: ':movieId',
            element: <Nowplaying />,
          },
        ],
      },
    ],
  },
]);
