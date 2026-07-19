import { useEffect, useState } from "react";
import {
  Activity,
  Database,
  BarChart3,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const loadingSteps = [
  {
    icon: Database,
    text: "Connecting to automation service...",
  },
  {
    icon: Activity,
    text: "Reading latest Google Sheet data...",
  },
  {
    icon: BarChart3,
    text: "Analyzing exchange rates...",
  },
  {
    icon: TrendingUp,
    text: "Generating market trends...",
  },
];

export default function LoadingScreen() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((current) =>
        current < loadingSteps.length - 1 ? current + 1 : current
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-slate-200 p-8">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-emerald-400 blur-xl opacity-30 animate-pulse" />
            <div className="relative w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center">
              <TrendingUp className="w-12 h-12 text-emerald-600 animate-pulse" />
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-slate-800">
          Crypto Monitoring
        </h1>

        <p className="text-center text-slate-500 mt-2">
          Preparing the latest market insights...
        </p>

        {/* Progress Bar */}
        <div className="mt-8">
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-700"
              style={{
                width: `${((step + 1) / loadingSteps.length) * 100}%`,
              }}
            />
          </div>

          <div className="flex justify-between text-xs text-slate-400 mt-2">
            <span>{Math.round(((step + 1) / loadingSteps.length) * 100)}%</span>
            <span>Loading...</span>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-8 space-y-4">
          {loadingSteps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className={`flex items-center gap-3 transition-all duration-500 ${
                  index <= step
                    ? "text-emerald-600"
                    : "text-slate-400"
                }`}
              >
                {index < step ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <Icon
                    className={`w-5 h-5 ${
                      index === step ? "animate-pulse" : ""
                    }`}
                  />
                )}

                <span className="font-medium">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-slate-500">
          Large spreadsheets may take{" "}
          <span className="font-semibold text-emerald-600">
            10–30 seconds
          </span>{" "}
          to process.
        </div>
      </div>
    </div>
  );
}