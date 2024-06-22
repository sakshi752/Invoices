import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Center from './Components/Center.jsx'
import InvoiceInfo from './Components/InvoiceInfo.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Center /> },
      { path: '/:id', element: <InvoiceInfo /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
