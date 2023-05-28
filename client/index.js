import React from 'react';
import { createRoot } from "react-dom/client";
//import main component

import {Provider} from 'react-redux';
import store from './store';
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("app")
const root = createRoot(container)

root.render(
    <BrowserRouter>
        <Provider store={store}>
        <div>Boiler Plate, replace this div with Main component</div>
        </Provider>
    </BrowserRouter>
);