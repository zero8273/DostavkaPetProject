import ProductSection from './ProductList/ProductSection';
import AboutUs from './AboutUs/AboutUs';
const Main = () => {
  return (
    <main>
      <ProductSection>Холодні страви</ProductSection>
      <ProductSection>Гарячі страви</ProductSection>
      <ProductSection>М"ясні страви</ProductSection>
      <AboutUs></AboutUs>
    </main>
  );
};
export default Main;
