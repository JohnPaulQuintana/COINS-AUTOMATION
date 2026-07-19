import { useEffect, useState } from "react";
import {
  Activity,
  Database,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  Clock3,
  Sparkles,
} from "lucide-react";

const loadingSteps = [
  {
    icon: Database,
    text: "Connecting to automation service...",
  },
  {
    icon: Activity,
    text: "Reading Google Sheet records...",
  },
  {
    icon: BarChart3,
    text: "Calculating exchange rate trends...",
  },
  {
    icon: TrendingUp,
    text: "Preparing dashboard insights...",
  },
];

const tips = [
  "Large spreadsheets are processed server-side for maximum accuracy.",
  "Exchange rates are grouped and analyzed before visualization.",
  "Only supported currencies are included in trend calculations.",
  "Data is refreshed directly from the automation service.",
];

export default function LoadingScreen() {
  const [step, setStep] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [tip, setTip] = useState(0);

  useEffect(() => {
    const progress = setInterval(() => {
      setStep((current) => (current + 1) % loadingSteps.length);
    }, 2500);

    const timer = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    const rotateTips = setInterval(() => {
      setTip((t) => (t + 1) % tips.length);
    }, 5000);

    return () => {
      clearInterval(progress);
      clearInterval(timer);
      clearInterval(rotateTips);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex items-center justify-center p-6">

      {/* Animated Background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-300/20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cyan-300/20 blur-3xl animate-pulse" />

      <div className="relative w-full max-w-xl rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-2xl p-8">

        {/* Header */}
        <div className="flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Crypto Monitoring
            </h1>

            <p className="text-slate-500 mt-1">
              Preparing your analytics dashboard
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
            <Sparkles size={15} />
            Automation Active
          </div>

        </div>

        {/* Hero */}
        <div className="flex justify-center mt-8 mb-8">

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-emerald-400 blur-2xl opacity-25 animate-ping" />

            <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">

              <TrendingUp
                size={42}
                className="text-white animate-pulse"
              />

            </div>

          </div>

        </div>

        {/* Progress */}
        <div className="space-y-2">

          <div className="h-2 rounded-full bg-slate-200 overflow-hidden">

            <div
              className="h-full w-1/3 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 animate-[loading_1.5s_ease-in-out_infinite]"
            />

          </div>

          <div className="flex justify-between text-xs text-slate-500">

            <div className="flex items-center gap-1">
              <Clock3 size={14} />
              {seconds}s elapsed
            </div>

            <span>Processing...</span>

          </div>

        </div>

        {/* Steps */}

        <div className="mt-8 space-y-4">

          {loadingSteps.map((item, index) => {
            const Icon = item.icon;

            const active = index === step;

            return (
              <div
                key={item.text}
                className={`flex items-center gap-4 rounded-xl p-3 transition-all duration-300 ${
                  active
                    ? "bg-emerald-50 border border-emerald-200"
                    : "opacity-60"
                }`}
              >
                {index < step ? (
                  <CheckCircle2 className="text-emerald-600" />
                ) : (
                  <Icon
                    className={`${
                      active ? "animate-pulse text-emerald-600" : "text-slate-400"
                    }`}
                  />
                )}

                <span className="font-medium text-slate-700">
                  {item.text}
                </span>

              </div>
            );
          })}

        </div>

        {/* Tips */}

        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4">

          <p className="text-xs uppercase tracking-wider text-slate-400">
            Did you know?
          </p>

          <p className="mt-2 text-sm text-slate-600 transition-all duration-500">
            {tips[tip]}
          </p>

        </div>

      </div>

      <style>{`
        @keyframes loading {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(420%);
          }
        }
      `}</style>

    </div>
  );
}