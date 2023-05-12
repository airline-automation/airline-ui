import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FlightProvider } from './contexts/flight/FlightContext';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <FlightProvider>
                <App />
            </FlightProvider>
        </ThemeProvider>
    </React.StrictMode>
);
