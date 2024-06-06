import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'urql'
import { createClient } from 'urql'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PersonPage from './pages/PersonPage'
import HomePage from './pages/HomePage'

const client = createClient({
  url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/person/:personId',
    element: <PersonPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <div className="h-screen flex flex-col space-y-10 pt-10 items-center justify-start px-10">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>
)
