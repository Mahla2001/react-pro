export default function Favorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul className="space-y-2">
          {favorites.map((item, index) => (
            <li key={index} className="border p-2 rounded">{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
}