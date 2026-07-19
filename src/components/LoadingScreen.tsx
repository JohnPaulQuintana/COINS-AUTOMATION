import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

const currencies = ["BTC", "ETH", "USDT", "BNB"];

export default function LoadingScreen() {
  const [rows, setRows] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const rowsInterval = setInterval(() => {
      setRows((v) => v + Math.floor(Math.random() * 600 + 200));
    }, 120);

    const activeInterval = setInterval(() => {
      setActive((v) => (v + 1) % currencies.length);
    }, 700);

    return () => {
      clearInterval(rowsInterval);
      clearInterval(activeInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="w-full max-w-lg">

        <div className="flex justify-center mb-8">

          <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">

            <TrendingUp
              className="text-emerald-400 animate-pulse"
              size={42}
            />

          </div>

        </div>

        <h1 className="text-center text-3xl font-bold text-white">
          Crypto Monitoring
        </h1>

        <p className="text-center text-slate-400 mt-2">
          Fetching latest market data...
        </p>

        <div className="mt-10 h-1 rounded-full overflow-hidden bg-slate-800">

          <div className="h-full w-1/3 bg-emerald-400 animate-[loading_1.2s_linear_infinite]" />

        </div>

        <div className="mt-10 space-y-4">

          {currencies.map((currency, index) => (

            <div
              key={currency}
              className={`flex justify-between items-center rounded-lg px-4 py-3 transition-all duration-300 ${
                active === index
                  ? "bg-emerald-500/10 border border-emerald-500/30"
                  : "bg-slate-900"
              }`}
            >

              <span className="text-white font-medium">
                {currency}
              </span>

              <span className="text-emerald-400">

                {active === index ? (
                  "Synchronizing..."
                ) : (
                  "Waiting"
                )}

              </span>

            </div>

          ))}

        </div>

        <div className="mt-8 text-center">

          <div className="text-4xl font-bold text-emerald-400">
            {rows.toLocaleString()}
          </div>

          <div className="text-slate-500 mt-1">
            records processed
          </div>

        </div>

      </div>

      <style>{`
        @keyframes loading{
          from{transform:translateX(-120%)}
          to{transform:translateX(420%)}
        }
      `}</style>

    </div>
  );
}