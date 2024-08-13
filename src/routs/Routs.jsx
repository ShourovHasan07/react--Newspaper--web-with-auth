
import {
  createBrowserRouter,
  
} from "react-router-dom";
import Roots from './../layouts/Roots';
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import PrivateRout from "./PrivateRout";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=>fetch('/news.json')

      },
      {
        path:'/news/:id',
        element:<PrivateRout> <News></News></PrivateRout>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      }
    ]
  },
]);
export default router;