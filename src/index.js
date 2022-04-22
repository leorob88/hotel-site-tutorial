import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RoomProvider } from "./context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <RoomProvider>
        <StrictMode>
            <App />
        </StrictMode>
    </RoomProvider>

);