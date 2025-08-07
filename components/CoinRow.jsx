import Link from 'next/link';
import SparklineChart from './SparklineChart';

export default function CoinRow({ coin, idx, degenMode }) {
  // Degen Mode: highlight big movers in 24h
  let highlight = '';
  if (degenMode) {
    if (coin.price_change_percentage_24h >= 10) highlight = 'bg-green-900/30';
    else if (coin.price_change_percentage_24h <= -10) highlight = 'bg-red-900/30';
  }

  return (
    <tr
      className={`
        transition
        ${highlight}
        hover:bg-white/5
      `}
    >
      <td className="py-2 px-3 font-semibold text-marketData">{idx + 1}</td>
      <td className="py-2 px-3 flex items-center gap-2">
        <img src={coin.image} alt={coin.symbol} className="w-6 h-6 rounded-full" />
        <Link href={`/coin/${coin.id}`} className="font-semibold hover:underline">{coin.name}</Link>
        <span className="ml-1 text-xs text-muted">{coin.symbol?.toUpperCase()}</span>
      </td>
      <td className="py-2 px-3">${coin.current_price?.toLocaleString()}</td>
      <td className={`py-2 px-3 ${coin.price_change_percentage_1h_in_currency > 0 ? 'text-[#3DFF8B]' : 'text-[#FF6B6B]'}`}>
        {coin.price_change_percentage_1h_in_currency?.toFixed(2)}%
      </td>
      <td className={`py-2 px-3 ${coin.price_change_percentage_24h > 0 ? 'text-[#3DFF8B]' : 'text-[#FF6B6B]'}`}>
        {coin.price_change_percentage_24h?.toFixed(2)}%
      </td>
      <td className="py-2 px-3">${coin.market_cap?.toLocaleString()}</td>
      <td className="py-2 px-3">${coin.total_volume?.toLocaleString()}</td>
      <td className="py-2 px-3">
        <SparklineChart data={coin.sparkline_in_7d?.price?.slice(-30) || []} color={coin.price_change_percentage_7d_in_currency > 0 ? 'green' : 'red'} />
      </td>
    </tr>
  );
}
