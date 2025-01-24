'use client'
import {
  BarChart3,
  Boxes,
  Briefcase,
  FileText,
  Home,
  Menu,
  Users,
  X
} from "lucide-react";
import { useState } from "react";

// Add navigation data
const navigationLinks = [
  {
    href: "#",
    icon: Home,
    label: "Dashboard",
    isActive: true
  },
  {
    href: "#",
    icon: Briefcase,
    label: "Projects",
    isActive: false
  },
  {
    href: "#",
    icon: BarChart3,
    label: "Sales",
    isActive: false
  },
  {
    href: "#",
    icon: FileText,
    label: "Invoices",
    isActive: false
  },
  {
    href: "#",
    icon: Users,
    label: "Customers",
    isActive: false
  }
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);

  return (
    <>
      <div
        id="page-container"
        className={`mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-white dark:bg-gray-900 dark:text-gray-100 ${desktopSidebarOpen ? "lg:pl-64" : ""
          }`}
      >
        {mobileSidebarOpen && (
          <div
            onClick={() => setMobileSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-gray-200/50 p-4 backdrop-blur-sm lg:hidden lg:p-8 dark:bg-gray-800/40"
            aria-hidden={!mobileSidebarOpen}
            tabIndex={-1}
          />
        )}

        <aside
          id="page-sidebar"
          className={`fixed bottom-0 left-0 top-0 z-50 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 ease-out lg:shadow-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 ${desktopSidebarOpen ? "lg:translate-x-0" : "lg:-translate-x-full"
            } ${mobileSidebarOpen
              ? "translate-x-0 shadow-lg shadow-gray-200 dark:shadow-gray-950/50"
              : "-translate-x-full"
            }`}
          aria-label="Main Sidebar Navigation"
        >
          <div className="flex h-16 flex-none items-center justify-between border-b border-gray-100 px-4 dark:border-gray-800/75">
            <a
              href="#"
              className="group inline-flex items-center gap-2 px-2.5 font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
            >
              <Boxes className="size-6 text-purple-600" />
              <span>Circles AI</span>
            </a>

            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileSidebarOpen(false)}
                type="button"
                className="group relative inline-flex w-full items-center gap-2 rounded-lg p-2 text-sm leading-5 text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
              >
                <span className="absolute inset-0 scale-50 rounded-lg bg-gray-100 opacity-0 transition ease-out group-hover:scale-100 group-hover:opacity-100 group-active:scale-105 group-active:bg-gray-200 dark:bg-gray-700/50 dark:group-active:bg-gray-700/75" />
                <X className="relative inline-block size-4" />
              </button>
            </div>
          </div>

          <div className="grow overflow-y-auto">
            <div className="flex flex-col gap-4 px-4 py-8">
              <nav className="flex flex-col gap-2">
                {navigationLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`group flex items-center gap-3 rounded-lg px-3 text-sm font-medium ${link.isActive
                      ? "text-purple-700 dark:text-purple-400"
                      : "hover:bg-gray-100/60 dark:hover:bg-gray-700/50"
                      }`}
                  >
                    <link.icon
                      className={`size-5 flex-none ${link.isActive
                        ? "text-purple-600 dark:text-purple-400"
                        : "text-gray-400 group-hover:text-gray-950 dark:group-hover:text-gray-50"
                        }`}
                    />
                    <span className="grow py-2">{link.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        <header
          id="page-header"
          className="fixed left-0 right-0 top-0 z-30 flex h-16 flex-none items-center bg-white/90 backdrop-blur-sm lg:hidden lg:pl-64 dark:bg-gray-900/90"
        >
          <div className="container mx-auto flex w-full justify-between px-4 lg:px-8 xl:max-w-7xl">
            <div className="flex flex-none items-center gap-4">
              <button
                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                type="button"
                className="group relative inline-flex w-full items-center gap-2 rounded-lg p-2 text-sm leading-5 text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
              >
                <span className="absolute inset-0 scale-50 rounded-lg bg-gray-100 opacity-0 transition ease-out group-hover:scale-100 group-hover:opacity-100 group-active:scale-105 group-active:bg-gray-200 dark:bg-gray-700/50 dark:group-active:bg-gray-700/75" />
                <Menu className="relative inline-block size-5" />
              </button>
            </div>

            <div className="flex grow items-center justify-center lg:hidden">
              <a
                href="#"
                className="group inline-flex items-center gap-2 font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
              >
                <Boxes className="size-6 text-purple-600" />
                <span>Circles AI</span>
              </a>
            </div>

            <div className="flex flex-none items-center gap-2" />
          </div>
        </header>

        <main
          id="page-content"
          className="flex max-w-full flex-auto flex-col pt-16 lg:pt-0 bg-gray-100"
        >
          <div className="container mx-auto flex w-full grow flex-col p-4 lg:p-8 xl:max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
