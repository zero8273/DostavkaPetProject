import ProductCard from './ProductCard';
import styles from './ProductSection.module.css';
const ProductSection = (props) => {
  return (
    <div className={styles['product-section']}>
      <h2 className={styles['product-section__name']}>{props.children}</h2>
      <div className={styles['product-section__list']}>
        {props.data.map((item) => (
          <ProductCard data={item}></ProductCard>
        ))}
      </div>
    </div>
  );
};
export default ProductSection;
