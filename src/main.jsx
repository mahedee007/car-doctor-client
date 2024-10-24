import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import router from './routes/router.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
 <div className='max-w-[1440px] mx-auto'>
   <StrictMode>
   
    <AuthProvider>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </AuthProvider>
    
    
  </StrictMode>
 </div>
)
