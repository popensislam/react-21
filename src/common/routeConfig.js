import React from 'react'
// import { createBrowserRouter, Link, Outlet } from 'react-router-dom';

// function delayForDemo(promise) {
//     return new Promise(resolve => {
//       setTimeout(resolve, 500);
//     }).then(() => promise);
// }

const MainPage = React.lazy(() => import("../pages/MainPage"))
const AboutPage = React.lazy(() => import("../pages/AboutPage"))
const IdTodo = React.lazy(() => import('../pages/IdTodo'))

export const PATHS = {
    MAIN: '/',
    ABOUT: '/about',
    TODO: '/:id',
}

export const routes = [
    {
        path: PATHS.MAIN,
        element: <MainPage/>
    },
    {
        path: PATHS.ABOUT,
        element: <AboutPage/>
    },
    {
        path: PATHS.TODO,
        element: <IdTodo/>
    }
]


// export const routesV6 = createBrowserRouter(
//     [
//         {
//             path: "/",
//             element: (
//                   <div>
//                     <h1>Hello</h1>
//                     <Link to="main">About Us</Link>
//                     <Outlet/>
//                   </div>
//             ),
//             loader: () => {
//                 console.log('Hello')
//                 return null
//             },
//             children: [
//                 {
//                     path: "/main",
//                     element: (
//                           <div>
//                             <h1>Hello World Main</h1>
//                             <Link to="/">Mina Us</Link>
//                           </div>
//                     ),
//                 }
//             ]
//         },
//     ]
// )