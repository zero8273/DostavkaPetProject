import jagna from '../../../assets/images/menu_1_0.png';
import style from './ProductCard.module.css';
import Button from '../../UI/Button';
import cartIcon from '../../../assets/svg/Buy.svg';
const ProductCard = () => {
  return (
    <div className={style['product-card']}>
      <img className={style['product-card__img']} src={jagna}></img>
      <div className={style['product-card__details']}>
        <h3 className={style['product-card__title']}>Ягня</h3>
        <span className={style['product-card__weight']}>Вага: 225 г</span>
        <p className={style['product-card__desc']}>
          Фаршировна гречневою кашою, курагою, апельсином та зеленим яблуком
        </p>
        <div className={style['product-card__buy']}>
          <span className={style['product-card__price']}>620 ₴</span>
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
