import style from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <div className={style.item}>
      <img
        className={style['item-img']}
        src={require(`../../assets/images/${props.data.img}`)}
        alt={`страва ${props.data.name}`}
      ></img>
      <div className={style['item-content']}>
        <h3>{props.data.name}</h3>
        <p>{props.data.description}</p>
      </div>
      <div className={style['item-counter']}>
        <button className={style['item-btn']} onClick={props.onRemove}>
          -
        </button>
        <span className={style['item-counter__amount']}>
          {props.data.amount}
        </span>
        <button className={style['item-btn']} onClick={props.onAdd}>
          +
        </button>
      </div>
      <span className={style['item-price']}>
        {`${props.data.price * props.data.amount} ₴`}
      </span>
      <button
        className={`${style['item-btn']} ${style['item-btn__remove']}`}
        onClick={props.onDelete}
      >
        +
      </button>
    </div>
  );
};
export default CartItem;
