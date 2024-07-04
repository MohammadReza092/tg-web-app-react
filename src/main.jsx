import  * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './components/Error/ErrorPage.jsx';
import WebAppProvider from './context/appContext.jsx';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import CartList from './components/Cart/CartList.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <ErrorPage/>
  },
  {
    path : 'order',
    element : <CartList/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WebAppProvider>
      <RouterProvider router={router}/>
    </WebAppProvider>
  </React.StrictMode>
)
