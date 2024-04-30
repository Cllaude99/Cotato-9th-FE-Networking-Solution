import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout';
import React from 'react';
import Home from '../pages/home';
import About from '../pages/about';
import Author from '../pages/author';
import Book from '../pages/book';
import Chapters from '../pages/chapter';
import Characters from '../pages/character';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'author/:name',
        element: <Author />,
        children: [
          {
            path: ':book',
            element: <Book />,
            children: [
              {
                path: 'chapters',
                element: <Chapters />,
              },
              {
                path: 'characters',
                element: <Characters />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
