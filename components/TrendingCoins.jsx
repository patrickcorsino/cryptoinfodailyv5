export default function TrendingCoins({ coins }) {
  if (!Array.isArray(coins) || coins.length === 0) return null;
  return (
    <div className="card-lux card-inner p-4 mb-6">
      <h2 className="text-lg font-bold mb-3 gold-text">Trending</h2>
      <ul>
        {coins.map((coin) => (
          <li key={coin.id} className="flex items-center space-x-2 mb-2 last:mb-0">
            <img src={coin.small} alt={coin.name} className="w-6 h-6" />
            <span className="font-semibold text-sm">{coin.symbol?.toUpperCase()}</span>
            <span className="text-muted text-xs">{coin.name}</span>
            <span className="ml-auto text-marketData text-xs">#{coin.market_cap_rank || coin.score + 1}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
