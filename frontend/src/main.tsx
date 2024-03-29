import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {CssBaseLine, ThemeProvider} from '@mui/material';
import theme from "./theme";
import {Provider} from "react-redux";
import {store} from "./app/store";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseLine/>
            <App/>
        </ThemeProvider>,
    </Provider>
)
