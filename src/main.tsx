import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify';
import Router from './routes/Router'
import { Provider } from "react-redux"
import { store } from './redux/store'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={Router()} />

    </Provider>
  </StrictMode>,
)
