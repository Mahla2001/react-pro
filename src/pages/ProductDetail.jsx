import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { productId } = useParams();
  return (
    <div>
      <h2 className="text-xl font-bold">Product Detail</h2>
      <p>Details for product ID: {productId}</p>
    </div>
  );
}