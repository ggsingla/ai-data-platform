import { Download } from "lucide-react";
import Statistics from "./Statistics";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-purple-900 text-gray-100">
      {/* Hero Content */}
      <div className="container relative mx-auto px-4 py-16 lg:px-8 lg:py-24 xl:max-w-7xl">
        <div className="text-center">
          <div className="mb-2 inline-flex rounded border border-purple-700/50 bg-purple-950/20 px-2 py-1 text-sm font-medium leading-4 text-gray-200">
            v6.0 Latest Version
          </div>
          <h1 className="mb-4 text-4xl font-black text-white">
            Next generation{" "}
            <span className="text-purple-400">website builder</span>
          </h1>
          <h2 className="mx-auto text-xl font-medium leading-relaxed text-gray-200 lg:w-2/3">
            Super fast and easy to use software to power your next idea or
            build your client&apos;s web projects. Get it today and profit.
          </h2>
        </div>
        <div className="pt-10 pb-16 lg:pb-20 flex items-center justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white bg-white px-7 py-3.5 font-semibold leading-6 text-gray-900 hover:bg-gray-100 hover:border-gray-100 focus:ring focus:ring-white/30 active:bg-gray-200 active:border-gray-200"
          >
            <Download className="size-5 opacity-75" />
            <span>Download for free</span>
          </a>
        </div>
        <Statistics />
      </div>
    </div>
  );
}
