import {FC} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import HOME from '../pages/home';
import CATEGORY from '../pages/category';

const ROUTES : FC = () => {
  return ( 
      <Router basename={'/'}> 
        <Routes>
          <Route path="/" element={<HOME/>}/> 
          {/* <Route path={`${process.env.PUBLIC_URL}/`} element={<HOME/>} /> */}
          <Route path="/category" element={<CATEGORY/>}/>
        </Routes>
      </Router>
  )
}

export default ROUTES; 