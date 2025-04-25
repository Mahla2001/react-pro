export default function Basket() {
  const basket = JSON.parse(localStorage.getItem("basket") || "[]");

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Basket</h2>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul className="space-y-2">
          {basket.map((item, index) => (
            <li key={index} className="border p-2 rounded">{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
}