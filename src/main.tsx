import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import card from "./features/card";
import App from './App'
import './index.css'

// const store = configureStore({
//   reducer: {
//     card: card,
//   }
// })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
)
