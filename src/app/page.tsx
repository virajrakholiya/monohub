import React from "react";
import { BookOpenIcon, LightBulbIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Project</h1>
      
      <div className="max-w-3xl text-center mb-12">
        <p className="text-xl mb-4">
          Our project aims to inspire and empower developers with a curated collection of tools, resources, and inspirations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <FeatureCard 
          icon={<BookOpenIcon className="w-12 h-12" />}
          title="Learn"
          description="Explore our comprehensive guides and tutorials."
        />
        <FeatureCard 
          icon={<LightBulbIcon className="w-12 h-12" />}
          title="Get Inspired"
          description="Discover innovative projects and ideas from the community."
        />
        <FeatureCard 
          icon={<CodeBracketIcon className="w-12 h-12" />}
          title="Build"
          description="Access powerful tools and resources to create amazing projects."
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col  items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-105">
      {icon}
      <h2 className="text-2xl font-semibold mt-4 mb-2">{title}</h2>
      <p className="text-center">{description}</p>
    </div>
  );
}

export default HomePage;
