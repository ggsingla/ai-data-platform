
export default function Footer() {
  return (
    <footer id="page-footer" className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-6 lg:gap-10">
          <div className="space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400/75">
              Platform
            </h4>
            <nav className="flex flex-col gap-3 text-sm">
              <a href="#" className="font-medium text-gray-400 hover:text-gray-50">
                Features
              </a>
              <a href="#" className="font-medium text-gray-400 hover:text-gray-50">
                Security
              </a>
              <a href="#" className="font-medium text-gray-400 hover:text-gray-50">
                Pricing
              </a>
              <a href="#" className="font-medium text-gray-400 hover:text-gray-50">
                Resources
              </a>
            </nav>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400/75">
              Community
            </h4>
            <nav className="flex flex-col gap-3 text-sm">
              <a href="#" className="font-medium text-gray-400 hover:text-gray-50">
                Forums
              </a>
              <a href="#" className="font-medium text-gray-400 hover:text-gray-50">
                Discord
              </a>
              <a href="#" className="font-medium text-gray-400 hover:text-gray-50">
                Events
              </a>
              <a href="#" className="font-medium text-gray-400 hover:text-gray-50">
                Blog
              </a>
            </nav>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400/75">
              Company
            </h4>
            <nav className="flex flex-col gap-3 text-sm">
              <a href="#" className="font-medium text-gray-400 hover:text-gray-50">
                About
              </a>
              <a href="#" className="font-medium text-gray-400 hover:text-gray-50">
                Careers
              </a>
              <a href="#" className="font-medium text-gray-400 hover:text-gray-50">
                Contact
              </a>
              <a href="#" className="font-medium text-gray-400 hover:text-gray-50">
                Partners
              </a>
            </nav>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400/75">
              Legal
            </h4>
            <nav className="flex flex-col gap-3 text-sm">
              <a href="#" className="font-medium text-gray-400 hover:text-gray-50">
                Terms of Service
              </a>
              <a href="#" className="font-medium text-gray-400 hover:text-gray-50">
                Privacy Policy
              </a>
              <a href="#" className="font-medium text-gray-400 hover:text-gray-50">
                Cookies
              </a>
              <a href="#" className="font-medium text-gray-400 hover:text-gray-50">
                Licenses
              </a>
            </nav>
          </div>
        </div>
        <hr className="my-10 border-dashed border-gray-700/75" />
        <div className="text-center text-sm text-gray-400/80">
          <span className="font-medium">Company Inc</span> ©
        </div>
      </div>
    </footer>
  );
}
