import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import router from './routes/router.jsx';

createRoot(document.getElementById('root')).render(
 <div className='max-w-screen-xl mx-auto'>
   <StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    
  </StrictMode>
 </div>
)
