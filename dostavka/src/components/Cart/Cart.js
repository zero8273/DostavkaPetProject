import Button from '../UI/Button';
import Modal from '../UI/Modal';
import style from './Cart.module.css';
import CartItem from './CartItem';
import { useContext } from 'react';
import CartContext from '../../store/Cart-context';
const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const hasItemInCart = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };
  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const deleteCartItemHandler = (id) => {
    cartContext.deleteItem(id);
  };
  return (
    <Modal onHideCart={props.onHideCart}>
      <div>
        <button className={style['cart-btn__back']} onClick={props.onHideCart}>
          На головну
        </button>
        <h2 className={style['cart-title']}>
          Корзина
          <span className={style['cart-title__count']}>
            (в корзині 3 продукта)
          </span>
        </h2>
        <div className={style['cart-item__list']}>
          {hasItemInCart ? (
            cartContext.items.map((item) => (
              <CartItem
                key={item.id}
                data={item}
                onAdd={addCartItemHandler.bind(null, item)}
                onRemove={removeCartItemHandler.bind(null, item.id)}
                onDelete={deleteCartItemHandler.bind(null, item.id)}
              ></CartItem>
            ))
          ) : (
            <p>Поки що в корзині пусто</p>
          )}
        </div>
        <div className={style['cart-order']}>
          <p className={style['cart-order__title']}>
            Загалом:
            <span className={style['cart-order__summ']}>
              {cartContext.totalAmount} ₴
            </span>
          </p>
          {hasItemInCart && <Button>Оформити замовлення</Button>}
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
