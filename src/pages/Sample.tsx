import React from 'react';

const Sample: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto p-8 bg-white" aria-labelledby="project-title">
      
      {/* Project Title and Tag */}
      <header className="mb-8">
        <h1 id="project-title" className="text-2xl font-bold text-black mb-4">
          Designing Dashboards with usability in mind
        </h1>
        <div className="flex items-center flex-wrap gap-2 text-sm">
          <span className="bg-red-400 text-white px-3 py-1 rounded-full font-medium" aria-label="Project year">
            2020
          </span>
          <span className="text-gray-600">Dashboard User Experience Design</span>
        </div>
      </header>

      {/* Project Description */}
      <section className="mb-8" aria-labelledby="project-description">
        <p id="project-description" className="text-gray-700 text-sm leading-relaxed">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </section>

      {/* First Image */}
      <section className="mb-12" aria-label="Dashboard Screenshot Q1">
        <img 
          src="/Q1.png" 
          alt="Dashboard showing Q1 layout with usability enhancements"
          className="w-full h-80 object-cover rounded-lg shadow-sm"
          width="960"
          height="320"
          loading="lazy"
        />
      </section>

      {/* Second Image */}
      <section className="mb-12" aria-label="Dashboard Screenshot Q2">
        <img 
          src="/Q2.png" 
          alt="Dashboard showing Q2 view of user activity"
          className="w-full h-80 object-cover rounded-lg shadow-sm"
          width="960"
          height="320"
          loading="lazy"
        />
      </section>

      {/* Section Headings & Content */}
      <section className="mb-8" aria-labelledby="section-headings">
        <h2 id="section-headings" className="text-xl font-semibold text-black mb-3">Heading 1</h2>
        <h3 className="text-lg font-medium text-black mb-4">Heading 2</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </section>

      {/* Third Image */}
      <section className="mb-12" aria-label="Interface view Q3">
        <img 
          src="/Q3.png" 
          alt="Interface view of advanced user analytics Q3"
          className="w-full h-96 object-cover rounded-lg shadow-sm"
          width="960"
          height="384"
          loading="lazy"
        />
      </section>

    </main>
  );
};

export default Sample;
