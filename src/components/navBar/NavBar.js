import {Link, NavLink} from "react-router-dom";



export default function NavBar() {
    return(
        <ul style={{display: 'flex', listStyleType: 'none'}}>
            <li>
                <NavLink to="/" className='link'>Main Page</NavLink>
            </li>
            <li>
                <NavLink to="/about" className='link'>About Page</NavLink>
            </li>
            <li>
                <NavLink to="/blogs" className='link'>Blogs Page</NavLink>
            </li>
            <li>
                <NavLink to="/users" className='link'>Users Page</NavLink>
            </li>
        </ul>
    )
}