import ProductSection from './ProductList/ProductSection';
import AboutUs from './AboutUs/AboutUs';
import Contacts from './Contacts/Contacts';

import DATA from './DataProducts.json';
const Main = () => {
  return (
    <main>
      <ProductSection data={DATA[1]}>Холодні страви</ProductSection>
      <ProductSection data={DATA[0]}>Гарячі страви</ProductSection>
      <ProductSection data={DATA[2]}>М"ясні страви</ProductSection>
      <AboutUs></AboutUs>
      <Contacts />
    </main>
  );
};
export default Main;
