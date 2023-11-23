import style from './FeatureCard.module.css';
const FeatureCard = (props) => {
  return <div className={style['feature-card']}>{props.children}</div>;
};
export default FeatureCard;
