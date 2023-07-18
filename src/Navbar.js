import {Link} from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="navbar">
           <Link to ="/"><h1>Stridesco</h1></Link>

           <div className="links">
            <Link to ="/"> Home </Link>
            <Link to ="/add"> New Blog </Link>
            <Link to ="/about"> About </Link>
            <Link to ="/contact"> Contact </Link>
           </div>

        </nav>
     );
}
 
export default Navbar;