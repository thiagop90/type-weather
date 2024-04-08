import { createBrowserRouter } from 'react-router-dom'

import App from './pages/app'
import Dashboard from './pages/dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
])
