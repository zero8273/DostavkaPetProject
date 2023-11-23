import ProductCard from './ProductCard';
import styles from './ProductSection.module.css';
const ProductSection = (props) => {
  return (
    <div className={styles['product-section']}>
      <h2 className={styles['product-section__name']}>{props.children}</h2>
      <ProductCard></ProductCard>
    </div>
  );
};
export default ProductSection;
