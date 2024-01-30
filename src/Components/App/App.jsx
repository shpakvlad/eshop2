import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Shop from '../Shop/Shop';
import First from "../First/First";
import ProductInfo from "../Products/ProductInfo/ProductInfo";

const router = createBrowserRouter([
    {
        path: '/',
        element: <First/>
    },
    {
        path: '/shop',
        element: <Shop/>
    },
    {
        path: '/productinfo/:prodID',
        element: <ProductInfo/>
    }
]
//     , {
//     basename: "/eshop/",
// }

);

const App = () => {
    return (
        <div className="App">

            <RouterProvider router={router}/>

        </div>
    )
};

export default App;
