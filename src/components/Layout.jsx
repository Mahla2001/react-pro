import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div>
      <header className="bg-blue-500 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Mahla Barati Shop</h1>
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/basket">Basket</Link>
        </nav>
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
}