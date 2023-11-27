import Button from '../UI/Button';
import Modal from '../UI/Modal';
import style from './Cart.module.css';
import CartItem from './CartItem';
const Cart = () => {
  return (
    <Modal>
      <div>
        <button className={style['cart-btn__back']}> На головну </button>
        <h2 className={style['cart-title']}>
          Корзина
          <span className={style['cart-title__count']}>
            (в корзині 3 продукта)
          </span>
        </h2>
        <div className={style['cart-item__list']}>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
        </div>
        <div className={style['cart-order']}>
          <p className={style['cart-order__title']}>
            Загалом:<span className={style['cart-order__summ']}>500 грн</span>
          </p>
          <Button>Оформити замовлення</Button>
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
