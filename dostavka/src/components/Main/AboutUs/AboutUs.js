import FeatureCard from '../../UI/FeatureCard';
import ProductsIcon from '../../../assets/svg/onion.svg';
import DeliveryIcon from '../../../assets/svg/flash.svg';
import CookIcon from '../../../assets/svg/cook.svg';
import style from './AboutUs.module.css';
const AboutUs = () => {
  return (
    <div className={style['aboutus']}>
      <div className={style['aboutus-content']}>
        <h2 className={style['aboutus-content__title']}>Наше кафе</h2>
        <p className={style['aboutus-content__description']}>
          Ми розташовані в одному з найживописніших місць міста - на березі
          річки. Це ваш оазис в межах міста, куди можна втекти від шумного і
          пилучого мегаполісу. Ми справді унікальні, адже все продумано до
          дрібниць: проект побудований з дикого закарпатського зруба, камін у
          головному залі ресторану та панорамні вікна з видом на річку, затишні
          бесідки на березі річки і найкраща видова тераса, намет зі сидінням на
          200 осіб, казковий дитячий будиночок і басейн.
        </p>
        <button className={style['aboutus-content__btn']}>
          Подивитись меню
        </button>
      </div>
      <div className={style['aboutus-futures']}>
        <FeatureCard>
          <img src={ProductsIcon}></img>
          <p className={style['aboutus-futures__description']}>
            Свіжі продукти
          </p>
        </FeatureCard>
        <FeatureCard>
          <img src={DeliveryIcon}></img>
          <p>Швидка доставка</p>
        </FeatureCard>
        <FeatureCard>
          <img src={CookIcon}></img>
          <p>Найкращі кухарі</p>
        </FeatureCard>
        <FeatureCard>
          <img src={ProductsIcon}></img>
          <p>Незрівнянний смак</p>
        </FeatureCard>
      </div>
    </div>
  );
};
export default AboutUs;
