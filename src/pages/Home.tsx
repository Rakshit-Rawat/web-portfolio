import React from "react";

const Home = () => {
  const featuredWorks = [
    {
      id: 1,
      title: "Designing Dashboards",
      year: "2023",
      category: "Dashboard",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
      image: "/P1.png",
    },
    {
      id: 2,
      title: "Vibrant Portraits of 2024",
      year: "2024",
      category: "Illustration",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
      image: "/P2.png",
    },
    {
      id: 3,
      title: "36 Days of Malayalam type",
      year: "2025",
      category: "Typography",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
      image: "/P3.png",
    },
  ];

  const recentPosts = [
    {
      title: "Making a design system from scratch",
      date: "12 Feb 2025",
      category: "Design, Pattern",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
    },
    {
      title: "Creating pixel perfect icons in Figma",
      date: "12 June 2024",
      category: "Figma, Icon Design",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        className="flex items-center justify-center px-4 md:px-20 bg-white dark:bg-gray-900 transition-colors"
        style={{ minHeight: "calc(100vh - 96px)" }}
        aria-label="Hero"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center w-full gap-8">
          <div className="w-full lg:w-3/5 flex flex-col justify-center items-start mb-8 lg:mb-0">
            <h1 className="text-3xl md:text-5xl my-2 font-medium text-black dark:text-white">
              Hi, I am John
            </h1>
            <h2 className="text-4xl md:text-6xl my-2 font-serif text-black dark:text-white">
              Creative Designer
            </h2>
            <p className="text-base my-6 md:my-10 text-gray-600 dark:text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi...
            </p>
            <button
              className="font-sans text-base uppercase text-black dark:text-white cursor-pointer border-2 border-black dark:border-white px-6 py-3 shadow-[1px_1px_0px_0px,_2px_2px_0px_0px,_3px_3px_0px_0px,_4px_4px_0px_0px,_5px_5px_0px_0px] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-200 bg-white dark:bg-gray-800"
              aria-label="Download resume PDF"
            >
              Download Resume
            </button>
          </div>
          <div className="w-full lg:w-2/5 flex items-center justify-center">
            <img
              src="/portfolio.png"
              alt="John's creative portfolio illustration"
              className="max-w-full h-auto"
              width="400"
              height="400"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section
        className="bg-gray-100 dark:bg-gray-800 py-16 px-4 md:px-20 transition-colors"
        aria-labelledby="recent-posts-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12 justify-between">
            <h2
              id="recent-posts-heading"
              className="text-2xl md:text-3xl font-semibold text-black dark:text-white"
            >
              Recent Posts
            </h2>
            <button
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 font-medium"
              aria-label="View all blog posts"
            >
              See All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post, idx) => (
              <article
                key={idx}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm dark:shadow-md hover:shadow-md dark:hover:shadow-lg transition-shadow duration-200"
                aria-labelledby={`post-title-${idx}`}
              >
                <h3
                  id={`post-title-${idx}`}
                  className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100"
                >
                  {post.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <time>{post.date}</time>
                  <span className="mx-2" aria-hidden="true">
                    |
                  </span>
                  <span>{post.category}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {post.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section
        className="py-16 px-4 md:px-20 bg-white dark:bg-gray-900 transition-colors"
        aria-labelledby="featured-works-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="featured-works-heading"
            className="text-2xl md:text-3xl font-semibold mb-12 text-black dark:text-white"
          >
            Featured Works
          </h2>
          <div className="space-y-8">
            {featuredWorks.map((work) => (
              <article
                key={work.id}
                className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                aria-labelledby={`work-title-${work.id}`}
              >
                <div className="w-full md:w-64 h-48 flex-shrink-0">
                  <div className="w-full h-full rounded-lg flex items-center justify-center group">
                    <img
                      src={work.image}
                      alt={`Thumbnail for ${work.title}`}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-200 ease-in-out"
                      width="256"
                      height="192"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3
                    id={`work-title-${work.id}`}
                    className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3"
                  >
                    {work.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-gray-800 text-white px-3 py-1 rounded text-sm font-medium">
                      {work.year}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 font-medium">
                      {work.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
