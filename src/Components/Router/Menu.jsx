import React from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import Home from './Home';
import News from './News';
import Contact from './Contact';

const Menu = () => {
    return ( 
        <React.Fragment>
            <nav>
            <ul>
                <li>
                    <Link to='/'> Home</Link>
                </li>
                <li>
                    <Link to='/news'> News</Link>
                </li>
                <li>
                    <Link to='/contact'> Contact</Link>
                </li>
            </ul>
        </nav>

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/news/*' element={<News/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </React.Fragment>
     );
}
 
export default Menu;