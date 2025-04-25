import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import Favorites from './pages/Favorites';
import Basket from './pages/Basket';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Layout>
    </Router>
  );
}

