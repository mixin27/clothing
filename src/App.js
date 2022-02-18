import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import AuthPage from './pages/auth/AuthPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
