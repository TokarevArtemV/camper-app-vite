import { NavLink } from 'react-router-dom';
import { Logo } from '../';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={`container`}>
        <nav className={s.header__navi}>
          <Logo />
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/catalog'}>Catalog</NavLink>
          <NavLink to={'/favorites'}>Favorites</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
