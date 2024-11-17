import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./utils/routes/router.jsx";
import GlobalProvider from "./contexts/globalContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalProvider>
        <RouterProvider router={routes}/>
        </GlobalProvider>
    </StrictMode>,
)
