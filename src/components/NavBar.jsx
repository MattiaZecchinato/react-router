import { NavLink } from 'react-router-dom';

// css
import style from './NavBar.module.css';

export default function NavBar() {

    return <>
        <nav className={style.linkBox}>

            <NavLink to='/' className={style.link}><span>Home Page</span></NavLink>
            <NavLink to='/AboutUs' className={style.link}><span>About Us</span></NavLink>
            <NavLink to='/PostList' className={style.link}><span>Post</span></NavLink>

        </nav>
    </>
}