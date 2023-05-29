import { BrowserRouter as Router, Route, Routes, useLocation }
   from 'react-router-dom';

import Home from '../pages/Home'
import Layout from './Layout/Layout'
import SingleProject from '../pages/SingleProject'
import Error from '../pages/Error'




import { AnimatePresence } from "framer-motion"

function AnimatedRoutes() {
   const location = useLocation();

   return (
      <AnimatePresence>
         <Routes >
            <Route location={location} path='/' element={<Layout />}>
               <Route path="/" element={<Home />} />
               <Route path='project/:id' element={<SingleProject />} />
               <Route path='/*' element={<Error />} />
            </Route>
         </Routes>
      </AnimatePresence>
   )
}

export default AnimatedRoutes