import { useEffect, useState } from "react";
import { TrendingUp, LoaderCircle } from "lucide-react";

const status = [
  "Connecting to automation service...",
  "Reading latest Google Sheet...",
  "Analyzing market trends...",
  "Preparing dashboard...",
];

export default function LoadingScreen() {
  const [message, setMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage((prev) => (prev + 1) % status.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-white">

      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-green-100 blur-3xl" />

      <div className="relative w-full max-w-md rounded-3xl border border-emerald-100 bg-white/90 p-10 shadow-xl backdrop-blur">

        {/* Logo */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-100">

          <TrendingUp
            size={38}
            className="text-emerald-600 animate-pulse"
          />

        </div>

        <h1 className="mt-6 text-center text-3xl font-bold text-slate-800">
          Crypto Monitoring
        </h1>

        <p className="mt-2 text-center text-slate-500">
          Loading the latest market trends
        </p>

        {/* Animated Progress */}
        <div className="mt-8 overflow-hidden rounded-full bg-emerald-100 h-2">

          <div className="loading-bar h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400" />

        </div>

        {/* Status */}
        <div className="mt-8 flex items-center justify-center gap-3">

          <LoaderCircle className="animate-spin text-emerald-600" size={18} />

          <span className="text-sm font-medium text-slate-700">
            {status[message]}
          </span>

        </div>

        {/* Info */}
        <p className="mt-8 text-center text-xs leading-6 text-slate-500">
          Large datasets may take a few moments while the automation service
          processes and analyzes the latest spreadsheet data.
        </p>

      </div>

      <style>{`
        .loading-bar{
          width:35%;
          animation:loading 1.4s linear infinite;
        }

        @keyframes loading{
          from{
            transform:translateX(-120%);
          }
          to{
            transform:translateX(420%);
          }
        }
      `}</style>

    </div>
  );
}