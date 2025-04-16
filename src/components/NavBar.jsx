import { NavLink } from 'react-router-dom';

export default function NavBar() {

    return <>
        <nav>

            <NavLink to='/'>Home Page</NavLink>
            <NavLink to='/AboutUs'>About Us</NavLink>
            <NavLink to='/PostList'>Post List</NavLink>

        </nav>
    </>
}