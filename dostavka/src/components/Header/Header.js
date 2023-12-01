import styles from './Header.module.css';
import Navigation from './Navigation';
import Button from '../UI/Button';
import CallIcon from '../../assets/svg/Calling.svg';
import { useContext } from 'react';
import CartContext from '../../store/Cart-context';
const Header = (props) => {
  const ctx = useContext(CartContext);
  const cartCount = ctx.items.length;
  return (
    <header>
      <div className={styles.header__panel}>
        <span className={styles['header__panel-logo']}>LOGOS</span>
        <input type="text" placeholder="Введіть вашу адресу"></input>
        <div className={styles['header__panel-contact']}>
          <a href="tel:+380975662350">
            <img
              src={CallIcon}
              className={styles['header__panel-contact-icon']}
            ></img>
          </a>
          <div className={styles['header__panel-contact-content']}>
            <span className={styles['header__panel-contact-disc']}>
              Контакти:
            </span>
            <span className={styles['header__panel-contact-numb']}>
              +38 (097) 566-23-50
            </span>
          </div>
        </div>
        <Button onClick={props.onShowCart}>
          Корзина
          <div className={styles['header__panel-cart-count']}>{cartCount}</div>
        </Button>
      </div>
      <div className={styles['header__description']}>
        <h1>Доставка Найсмачніших страв за 60 хвилин</h1>
        <span className={styles['header__description-question']}>
          Ще не спробував ?
        </span>
      </div>
      <Navigation />
    </header>
  );
};
export default Header;
