import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Customers from './components/Customers';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="products"><Products /></div>
        <div id="customers"><Customers /></div>
        <div id="contact"><Contact /></div>

      </div>
    </Router>
  );
}

export default App;

