import style from './Footer.module.css';
import arrowIcon from '../../assets/svg/Arrow.svg';
const Footer = () => {
  return (
    <footer className={style['footer']}>
      <a className={style['footer-btn']} href="#">
        <img src={arrowIcon}></img>
      </a>
      <div className={style['footer-content']}>
        <span className={style['footer-content__logo']}>LOGOS</span>
        <span className={style['footer-content__organization']}>
          © ТОВ СК "АПШЕРОН". Усі права захищені. 2010-2023.
        </span>
        <ul className={style['footer-content__terms']}>
          <li>Користувацька угода</li>
          <li>Мапа сайту</li>
          <li>Політика конфіденційності</li>
        </ul>
      </div>
      <nav className={style['footer-navigation']}>
        <ul className={style['footer-navigation__list']}>
          <li className={style['footer-navigation__item']}>
            <a className={style['footer-navigation__link']}>Про ресторан</a>
          </li>
          <li className={style['footer-navigation__item']}>
            <a className={style['footer-navigation__link']}>Умови доставки</a>
          </li>
          <li className={style['footer-navigation__item']}>
            <a className={style['footer-navigation__link']}>
              {' '}
              Повернення товару
            </a>
          </li>
          <li className={style['footer-navigation__item']}>
            <a className={style['footer-navigation__link']}>Акції</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;
