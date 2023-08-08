import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route.jsx'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import AuthProvider from './provider/AuthProvider.jsx'
import { ToastProvider } from 'react-toast-notifications'
<script>
  AOs.init();
</script>
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </ToastProvider>
  </React.StrictMode>,
)
