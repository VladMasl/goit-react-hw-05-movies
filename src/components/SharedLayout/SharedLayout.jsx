import { NavLink, Outlet } from 'react-router-dom';
import s from '../SharedLayout/SharedLayout.module.css';
const SharedLayout = () => {
  return (
    <>
      <header className={s.header}>
        <nav className={s.nav}>
          <NavLink to="/" className={s.navLink}>Home</NavLink>
          <NavLink to="/movies" className={s.navLink}>Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
export default SharedLayout;
