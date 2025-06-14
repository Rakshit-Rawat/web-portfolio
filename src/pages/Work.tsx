import React from 'react';

interface WorkProject {
  id: number;
  title: string;
  year: string;
  category: string;
  description: string;
  imageColor: string;
  imageContent: string;
  imageSrc: string;
}

const Work: React.FC = () => {
  const projects: WorkProject[] = [
    {
      id: 1,
      title: "Designing Dashboards",
      year: "2020",
      category: "Dashboard",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      imageColor: "bg-slate-800",
      imageContent: "dashboard",
      imageSrc: "/P1.png",
    },
    {
      id: 2,
      title: "Vibrant Portraits of 2020",
      year: "2018",
      category: "Illustration",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      imageColor: "bg-gradient-to-br from-orange-300 via-pink-400 to-purple-500",
      imageContent: "portrait",
      imageSrc: "/P2.png",
    },
    {
      id: 3,
      title: "36 Days of Malayalam type",
      year: "2018",
      category: "Typography",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      imageColor: "bg-gray-800",
      imageContent: "typography",
      imageSrc: "/P3.png",
    },
    {
      id: 4,
      title: "Components",
      year: "2018",
      category: "Components, Design",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      imageColor: "bg-red-400",
      imageContent: "components",
      imageSrc: "/P4.png",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-900 min-h-screen transition-colors">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-8 sm:mb-10 lg:mb-12">
        Work
      </h1>

      <div className="space-y-6 sm:space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <div
              className={`w-full sm:w-60 h-48 sm:h-40 rounded-lg overflow-hidden flex-shrink-0 relative ${project.imageColor}`}
            >
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black dark:text-white mb-2 sm:mb-3">
                {project.title}
              </h2>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 text-xs px-3 py-1 rounded-full font-medium w-fit">
                  {project.year}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  {project.category}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
