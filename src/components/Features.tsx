
import React from "react";
import { Shield, Zap, BarChart3, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

const Feature = ({ icon, title, description, className }: FeatureProps) => (
  <div className={cn("p-6 rounded-lg animate-fade-up", className)}>
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-gray-600">
            This starter template includes all the features you need to get your project
            up and running quickly and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature
            icon={<Shield size={24} />}
            title="Secure"
            description="Built with security best practices from the ground up to keep your data safe."
            className="opacity-0 animate-fade-up [animation-delay:200ms] [animation-fill-mode:forwards]"
          />
          <Feature
            icon={<Zap size={24} />}
            title="Fast"
            description="Optimized for speed with modern web technologies for the best user experience."
            className="opacity-0 animate-fade-up [animation-delay:400ms] [animation-fill-mode:forwards]"
          />
          <Feature
            icon={<BarChart3 size={24} />}
            title="Scalable"
            description="Designed to grow with your project from small prototypes to large applications."
            className="opacity-0 animate-fade-up [animation-delay:600ms] [animation-fill-mode:forwards]"
          />
          <Feature
            icon={<RefreshCw size={24} />}
            title="Flexible"
            description="Easy to customize and extend with your own components and functionality."
            className="opacity-0 animate-fade-up [animation-delay:800ms] [animation-fill-mode:forwards]"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
