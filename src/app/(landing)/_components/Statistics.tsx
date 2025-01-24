export default function Statistics() {
  return (
    <div className="bg-purple-900 text-white">
      <div className="mx-auto">
        <div className="grid grid-cols-1 text-center sm:grid-cols-3">
          <dl className="space-y-1 px-5 py-8">
            <dt className="text-4xl font-extrabold text-white">
              8,600+
            </dt>
            <dd className="text-sm font-semibold uppercase tracking-wide text-purple-200">
              Projects
            </dd>
          </dl>
          <dl className="space-y-1 px-5 py-8">
            <dt className="text-4xl font-extrabold text-white">
              2,500+
            </dt>
            <dd className="text-sm font-semibold uppercase tracking-wide text-purple-200">
              Clients
            </dd>
          </dl>
          <dl className="space-y-1 px-5 py-8">
            <dt className="text-4xl font-extrabold text-white">
              760k+
            </dt>
            <dd className="text-sm font-semibold uppercase tracking-wide text-purple-200">
              Earnings
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
