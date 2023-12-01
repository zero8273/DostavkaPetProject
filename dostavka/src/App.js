import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Fotter';
import Cart from './components/Cart/Cart';
import CartContextProvider from './store/CartContextProvider';
function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => setCartIsVisible(true);
  const hideCartHandler = () => setCartIsVisible(false);

  return (
    <React.Fragment>
      <CartContextProvider>
        {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler}></Header>
        <Main></Main>
      </CartContextProvider>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
