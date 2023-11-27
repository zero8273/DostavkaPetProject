import style from './CartItem.module.css';
import imgPiza from '../../assets/images/menu_1_0.png';
const CartItem = () => {
  return (
    <div className={style.item}>
      <img className={style['item-img']} src={imgPiza}></img>
      <div className={style['item-content']}>
        <h3>Піца подвійна папероні</h3>
        <p>
          Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок,
          базилик, соус песто
        </p>
      </div>
      <div className={style['item-counter']}>
        <button className={style['item-btn']}>-</button>
        <span className={style['item-counter__amount']}>1</span>
        <button className={style['item-btn']}>+</button>
      </div>
      <span className={style['item-price']}>1640 грн</span>{' '}
      <button className={`${style['item-btn']} ${style['item-btn__remove']}`}>
        +
      </button>
    </div>
  );
};
export default CartItem;
