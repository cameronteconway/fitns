import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { ShoppingCartProvider } from './context/ShoppingCartProvider.tsx';
import { WorkoutsProvider } from './context/WorkoutsProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <WorkoutsProvider>
            <ShoppingCartProvider>
                <App />
            </ShoppingCartProvider>
        </WorkoutsProvider>
    </React.StrictMode>
);
