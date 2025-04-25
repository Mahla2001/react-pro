import { Link } from "react-router-dom";
import { categories } from "../data";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to Mahla Barati's Shop</h2>
      <p className="mb-4">Choose a category to explore products:</p>
      <ul className="space-y-2">
        {categories.filter(cat => cat !== "all").map(category => (
          <li key={category}>
            <Link className="text-blue-600 underline" to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}