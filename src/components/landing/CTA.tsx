export default function CTA() {
  return (
    <>
      <div className="bg-purple-900 text-gray-100">
        <div className="container mx-auto space-y-8 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-black text-white">
              Are you ready? Let&apos;s create your free account!
            </h2>
            <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-300 lg:w-2/3">
              Get your own custom dashboard and start building amazing services.
              Inspiring results from day one without the pain.
            </h3>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white bg-white px-6 py-3 font-semibold leading-6 text-purple-900 hover:bg-gray-100 hover:border-gray-100 hover:text-purple-900 focus:ring focus:ring-purple-400/90 active:border-gray-200 active:bg-gray-200"
            >
              <span>Get Started</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
