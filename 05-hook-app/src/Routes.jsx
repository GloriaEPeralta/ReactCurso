import { Navigate, createBrowserRouter } from "react-router-dom";
//import { MainApp,AboutPage,HomePage } from "./09-useContext";
import { LoginPage } from "./09-useContext/LoginPage";
import { MainApp } from "./09-useContext/MainApp";
import { AboutPage } from "./09-useContext/AboutPage";  
import { HomePage } from "./09-useContext/HomePage";    


 
export const getRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <MainApp />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "about",
                element: <AboutPage  />,
            },
            {
                path: "*",
                element: <Navigate to="/AboutPage" />
            }
        ]
    }
]);
 