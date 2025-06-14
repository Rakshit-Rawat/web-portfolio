import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      tags: ["Express", "Handlebars"],
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      tags: ["Express", "Handlebars"],
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      tags: ["Express", "Handlebars"],
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 4,
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      tags: ["Express", "Handlebars"],
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <main
      className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 transition-colors"
      role="main"
      aria-label="Blog Posts"
    >
      <div className="max-w-4xl mx-auto py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12">
          Blog
        </h1>

        <section className="space-y-6 sm:space-y-8 lg:space-y-10" aria-live="polite">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-md border border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:p-8 hover:shadow-md dark:hover:shadow-lg transition-shadow duration-200"
              aria-labelledby={`post-title-${post.id}`}
              tabIndex={0}
            >
              <h2
                id={`post-title-${post.id}`}
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4"
              >
                {post.title}
              </h2>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <time
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium"
                  dateTime={new Date(post.date).toISOString()}
                >
                  {post.date}
                </time>
                <span className="hidden sm:inline text-gray-400 dark:text-gray-500" aria-hidden="true">
                  |
                </span>
                <div className="flex flex-wrap gap-1 sm:gap-2" aria-label="Tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center" role="listitem">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs sm:text-sm rounded-md font-medium">
                        {tag}
                      </span>
                      {index < post.tags.length - 1 && (
                        <span className="text-gray-400 dark:text-gray-500 ml-1 sm:ml-2" aria-hidden="true">
                          ,
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Blog;
