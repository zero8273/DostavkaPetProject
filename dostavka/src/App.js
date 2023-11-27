import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Fotter';
import Cart from './components/Cart/Cart';
function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      {cartIsVisible && <Cart />}
    </div>
  );
}

export default App;
