import jagna from '../../../assets/images/menu_1_0.png';
import style from './ProductCard.module.css';
import Button from '../../UI/Button';
import cartIcon from '../../../assets/svg/Buy.svg';
const ProductCard = (props) => {
  return (
    <div className={style['product-card']}>
      <img
        className={style['product-card__img']}
        src={require(`../../../assets/images/${props.data.img}`)}
      ></img>
      <div className={style['product-card__details']}>
        <div className={style['product-card__about']}>
          <h3 className={style['product-card__title']}>{props.data.name}</h3>
          <span className={style['product-card__weight']}>
            Вага: {props.data.weight} г
          </span>
        </div>

        <p className={style['product-card__desc']}>{props.data.description}</p>
        <div className={style['product-card__buy']}>
          <span className={style['product-card__price']}>
            {props.data.price} ₴
          </span>
          <Button>
            В корзину{' '}
            <img src={cartIcon} className={style['product-card__icon']}></img>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
