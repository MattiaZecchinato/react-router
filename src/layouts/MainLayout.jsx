import { Outlet } from "react-router-dom";

// Nav bar
import NavBar from "../components/NavBar";

export default function MainLayout() {

    return <>
        <NavBar />
        <Outlet />
    </>
}