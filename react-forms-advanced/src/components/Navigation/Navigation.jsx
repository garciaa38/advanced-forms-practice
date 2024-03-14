import { NavLink, Outlet } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
    return (
        <>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="sample-survey">Sample Survey</NavLink>
            <NavLink to="teacher-survey">Teacher Survey</NavLink>
          </nav>
          <Outlet />
        </>
    )
}

export default Navigation;