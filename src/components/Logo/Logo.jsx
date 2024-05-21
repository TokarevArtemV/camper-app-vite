import { Link } from 'react-router-dom';
import logo from '../../assets/static/images/logo.png';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/" className={s.link__icon}>
      <img className={s.icon} src={logo} alt="Logo of camper" />
    </Link>
  );
};

export default Logo;
