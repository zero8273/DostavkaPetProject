import ProductSection from './ProductList/ProductSection';
import AboutUs from './AboutUs/AboutUs';
import Contacts from './Contacts/Contacts';
const Main = () => {
  return (
    <main>
      <ProductSection>Холодні страви</ProductSection>
      <ProductSection>Гарячі страви</ProductSection>
      <ProductSection>М"ясні страви</ProductSection>
      <AboutUs></AboutUs>
      <Contacts />
    </main>
  );
};
export default Main;
