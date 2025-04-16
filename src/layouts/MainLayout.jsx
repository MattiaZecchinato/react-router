import { Outlet } from "react-router-dom";

// Nav bar
import Header from "../components/Header";

export default function MainLayout() {

    return <>
        <Header />
        <Outlet />
    </>
}