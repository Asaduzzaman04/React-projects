import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from '../pages/Home';
import About from '../pages/About';
import Service from '../pages/Service';
import Contact from '../pages/Contact';


const Router = createBrowserRouter([
    {
        path : '/',
        element: <Root/>,
        errorElement : 'bad request',
        children : [{
            path: '/',
            element : <Home/>,
        },{
            path : '/About',
            element : <About/>
        },{
            path : '/Service',
            element : <Service/>
        },{
            path : '/Contact',
            element : <Contact/>
        }]
    }
])

export default Router;