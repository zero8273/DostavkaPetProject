import style from './ProductCard.module.css';
import Button from '../../UI/Button';
import cartIcon from '../../../assets/svg/Buy.svg';
import { useContext } from 'react';
import CartContext from '../../../store/Cart-context';
const ProductCard = (props) => {
  const cartContext = useContext(CartContext);
  const addToCartHandler = () => {
    cartContext.addItem({
      img: props.data.img,
      name: props.data.name,
      description: props.data.description,
      id: props.data.id,
      weight: props.data.weight,
      price: props.data.price,
      amount: 1,
    });
  };
  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };
  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const inCart = cartContext.items.findIndex(
    (item) => item.id === props.data.id
  );
  return (
    <div className={style['product-card']}>
      <img
        className={style['product-card__img']}
        src={require(`../../../assets/images/${props.data.img}`)}
        alt={`страва ${props.data.name}`}
      ></img>
      <div className={style['product-card__details']}>
        <div className={style['product-card__about']}>
          <h3 className={style['product-card__title']}>{props.data.name}</h3>
          <span className={style['product-card__weight']}>
            Вага: {props.data.weight} г
          </span>
        </div>

        <p className={style['product-card__desc']}>{props.data.description}</p>
        {inCart === -1 ? (
          <div className={style['product-card__buy']}>
            <span className={style['product-card__price']}>
              {props.data.price} ₴
            </span>
            <Button onClick={addToCartHandler}>
              В корзину
              <img
                src={cartIcon}
                className={style['product-card__icon']}
                alt="Корзина"
              />
            </Button>
          </div>
        ) : (
          <div className={style['item-counter']}>
            <Button
              addClass={style['btn-change__amout']}
              onClick={removeCartItemHandler.bind(null, props.data.id)}
            >
              -
            </Button>
            <span className={style['item-counter__amount']}>
              {props.data.price * cartContext.items[inCart].amount} ₴
            </span>
            <Button
              addClass={style['btn-change__amout']}
              onClick={addCartItemHandler.bind(null, props.data)}
            >
              +
            </Button>
            <span className={style['product-card__counter']}>
              {cartContext.items[inCart].amount}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductCard;
