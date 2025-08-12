import React from "react";

const articles = [
  {
    title: "Top 10 life-changing personal development goals you need",
    date: "February 4, 2025",
    excerpt:
      "Success and achievement do not happen by chance. They are built on the understanding of growth and the pursuit of meaningful goals. The purpose of personal development is the stepping...",
    link: "#",
    image: "https://noblestbeing.com/wp-content/uploads/2025/02/pexels-olly-941555-1-1024x683.webp"
  },
  {
    title: "6 Simple daily habits to strengthen your emotional health",
    date: "February 3, 2025",
    excerpt:
      "Modern life brings its share of stress and distractions, often leaving us feeling overwhelmed and emotionally drained. But what if you could change that by adopting a few simple daily...",
    link: "#",
    image: "https://noblestbeing.com/wp-content/uploads/2025/02/little-girl-having-session-with-pschoterapist-man-giving-test-with-pictures-talking-with-school-girl-childhood-1024x683.webp"
  },
  {
    title: "3 Pillars spiritual energy impacts personal growth and healing",
    date: "January 29, 2025",
    excerpt:
      "Imagine tapping into a vital force that influences and enriches every part of your life. This isn’t just a fantasy. It’s the idea of spiritual energy. Drawing from age-old traditions...",
    link: "#",
    image: "https://noblestbeing.com/wp-content/uploads/2025/01/pexels-edwardutra-26214068-1024x684.webp"
  }
];

const Hero: React.FC = () => {
  return (
    <section className="p-6 space-y-6">
      {articles.map((item, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-900  overflow-hidden "
        >
          {/* Image */}
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-76"
            />
          )}

          {/* Content */}
          <div className="p-6">
            <h2 className="text-2xl font-light mb-2 dark:text-white">
              {item.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {item.date}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {item.excerpt}
            </p>
            <a
              href={item.link}
              className="inline-flex items-center gap-2 font-semibold text-sm text-gray-900 dark:text-white hover:text-blue-500"
            >
              CONTINUE READING <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
