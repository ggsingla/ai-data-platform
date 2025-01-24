import { Boxes } from "lucide-react";

export default function Navbar() {
  return (
    <header
      id="page-header"
      className="sticky top-0 z-50 flex flex-none items-center bg-white py-4 shadow-sm"
    >
      {/* Main Header Content */}
      <div className="container mx-auto flex flex-col gap-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-0 lg:px-8 xl:max-w-7xl">
        <div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600"
          >
            <Boxes className="size-5 text-purple-500 transition group-hover:scale-110" />
            <span>Company</span>
          </a>
        </div>
        <nav className="space-x-3 md:space-x-6">
          <a
            href="#"
            className="text-sm font-semibold text-gray-700 hover:text-purple-500"
          >
            <span>Features</span>
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-700 hover:text-purple-500"
          >
            <span>Pricing</span>
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-700 hover:text-purple-500"
          >
            <span>Support</span>
          </a>
        </nav>
      </div>
      {/* END Main Header Content */}
    </header>
  );
} 