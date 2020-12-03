import logo from './logo.svg';
import './App.css';
import './Css/vendor/reset.css';
import Header from './Compan/header';
import UnderheaderTop from './Compan/underheader/top.js';
import UnderheaderDown from './Compan/underheader/down.js';
import Price_block from './Compan/price_block'

function App() {
  return (
    <div className="App">
      <Header/>
      <UnderheaderTop/>
      <UnderheaderDown/>
      <Price_block/>
    </div>
  );
}

export default App;
