import {createBrowserRouter} from 'react-router-dom';
import Home from '../view/pages/Home';
import Detail from '../view/pages/Detail';

const router = createBrowserRouter([
    {
        path : "/",
        element : <Home />,
    },
    {
        path : "/detail",
        element : <Detail />,
    }
])

export default router;