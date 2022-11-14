import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter} from "react-router-dom";
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
        <HashRouter>
            <App/>
        </HashRouter>
        {/* </Provider> */}
        {/* </BrowserRouter> */}
    </React.StrictMode>
)
