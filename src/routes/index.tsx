import {FC} from 'react'
import {Route, Routes} from 'react-router-dom';
import HOME from '../pages/home';
import CATEGORY from '../pages/category';

const ROUTES: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HOME/>}/>
            {/* <Route path={`${process.env.PUBLIC_URL}/`} element={<HOME/>} /> */}
            <Route path="/category" element={<CATEGORY/>}/>
        </Routes>
    )
}

export default ROUTES;
