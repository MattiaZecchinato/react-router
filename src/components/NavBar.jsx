import { Link } from 'react-router-dom';

export default function NavBar() {

    return <>
        <nav>

            <Link to='/'>Home Page</Link>
            <Link to='/AboutUs'>About Us</Link>
            <Link to='/PostList'>Post List</Link>

        </nav>
    </>
}