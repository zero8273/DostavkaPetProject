import FeatureCard from '../../UI/FeatureCard';
import ProductsIcon from '../../../assets/svg/onion.svg';
import DeliveryIcon from '../../../assets/svg/flash.svg';
import CookIcon from '../../../assets/svg/cook.svg';
import style from './AboutUs.module.css';
const AboutUs = () => {
  return (
    <div>
      <div>
        <h2></h2>
        <p></p>
        <button></button>
      </div>
      <div>
        <FeatureCard>
          <img src={ProductsIcon} className={style.icon}></img>
          <p>aaaaa</p>
        </FeatureCard>
        <FeatureCard>
          <img src={DeliveryIcon}></img>
          <p></p>
        </FeatureCard>
        <FeatureCard>
          <img src={CookIcon}></img>
          <p></p>
        </FeatureCard>
      </div>
    </div>
  );
};
export default AboutUs;
