import {
  Code2,
  Palette,
  Settings2,
} from "lucide-react";

const featuresData = [
  {
    title: "Choose Template",
    description: "Browse through our collection of professionally designed templates that suit your project needs.",
    icon: Palette
  },
  {
    title: "Customize Design",
    description: "Personalize your template with our intuitive drag-and-drop editor. No coding knowledge required.",
    icon: Settings2
  },
  {
    title: "Add Content",
    description: "Fill your website with engaging content, images, and media to bring your vision to life.",
    icon: Code2
  }
];

export default function HowItWorks() {
  return (
    <div className="overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto flex flex-col gap-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
        {/* Heading */}
        <div className="text-center">

          <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
            How It Works
          </h2>
          <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 lg:w-2/3 dark:text-gray-300">
            Create your website in minutes with our easy-to-follow process. No technical skills needed.
          </h3>
        </div>
        {/* END Heading */}

        {/* Features */}
        <div className="relative">
          <div className="relative grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="mb-6 mx-auto flex size-14 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-500/20">
                    <Icon className="size-7 text-purple-700 dark:text-purple-300" />
                  </div>
                  <h4 className="mb-3 text-lg font-bold">{feature.title}</h4>
                  <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* END Features */}
      </div>
    </div>
  );
}
