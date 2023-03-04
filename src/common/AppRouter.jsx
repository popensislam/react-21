import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback='LOADING'>
            <Routes>
                {routes.map(({ path, element }) => 
                    <Route path={path} element={element}/>
                )}
            </Routes>
        </Suspense>
     );
}
 
export default AppRouter;