import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About This App</h1>
        <div className="space-y-4 text-gray-600">
          <p className="text-lg leading-relaxed">
            This Todo application is developed using <span className="font-semibold text-purple-600">React</span> and{" "}
            <span className="font-semibold text-blue-600">TypeScript</span>.
          </p>
          <p className="text-lg leading-relaxed">
            It demonstrates modern web development practices including:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Component-based architecture</li>
            <li>State management with React hooks</li>
            <li>Page routing with React Router</li>
            <li>Responsive design with TailwindCSS</li>
            <li>TypeScript for type safety</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
