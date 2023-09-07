import { createBrowserRouter } from 'react-router-dom'
import Canva from '../components/Canva'
import NotFound from '../components/NotFound'
import AppLayout from '../layout/AppLayout'
import Molecule from '../components/Molecule'
import AR from '../components/AR'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Canva />
      },
      {
        path: '/molecule',
        element: <Molecule />
      },
      {
        path: '/ar',
        element: <AR />
      }
    ]
  }
])
