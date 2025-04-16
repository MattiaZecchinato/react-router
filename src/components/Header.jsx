// css
import style from './Header.module.css';

import NavBar from "./NavBar";

export default function Header() {

    return <div className={style.headerBox}>
        <p>React Blog Pages</p>
        <NavBar />
    </div>
}