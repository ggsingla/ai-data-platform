import { Layers, Server, Workflow } from "lucide-react";

const domains = [
  {
    name: "Frontend",
    icon: <Layers className="size-8" />,
    description: "Web interface development",
    features: [
      "React & Next.js",
      "Vue & Nuxt",
      "TypeScript",
      "Tailwind CSS",
      "UI/UX Design",
      "Performance Optimization"
    ]
  },
  {
    name: "Backend",
    icon: <Server className="size-8" />,
    description: "Server-side development",
    features: [
      "Node.js & Express",
      "Python & Django",
      "Database Design",
      "API Development",
      "Cloud Services",
      "Security & Auth"
    ]
  },
  {
    name: "DevOps",
    icon: <Workflow className="size-8" />,
    description: "Infrastructure & deployment",
    features: [
      "CI/CD Pipelines",
      "Docker & K8s",
      "AWS & Azure",
      "Monitoring",
      "Automation",
      "Security"
    ]
  }
];

export default function ExpertDomains() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto space-y-10 px-4 py-16 lg:space-y-16 lg:px-8 lg:py-32 xl:max-w-7xl">
        {/* Heading */}
        <div className="text-center">

          <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
            Our Areas of Expertise
          </h2>
          <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 lg:w-2/3 dark:text-gray-300">
            Comprehensive solutions across the full development stack
          </h3>
        </div>

        {/* Domain Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-4">
          {domains.map((domain, index) => (
            <div key={index} className="flex flex-col lg:px-2 lg:pb-2">
              <div className="flex grow flex-col rounded-xl border border-gray-200 dark:border-gray-700/75">
                <div className="space-y-5 rounded-t-lg p-6 text-center lg:p-8">
                  <div className="flex justify-center text-purple-600 dark:text-purple-400">
                    {domain.icon}
                  </div>
                  <div>
                    <h4 className="mb-1 text-xl font-bold">{domain.name}</h4>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-400/75">
                      {domain.description}
                    </p>
                  </div>
                </div>
                <div className="grow border-t border-gray-100 p-6 lg:space-y-8 lg:p-8 dark:border-gray-700/75">
                  <ul className="space-y-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {domain.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="hi-solid hi-check inline-block size-6 text-purple-600 dark:text-purple-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
