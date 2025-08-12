import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    },
    {
        title: "10 Mental health symptoms you shouldn’t ignore",
        date: "January 27, 2025",
        excerpt:
            "Mental health is just as important as physical health, yet it often doesn’t get the attention it deserves. Recognizing the early signs of a mental health concern can be the...",
        link: "#",
        image:
            "https://noblestbeing.com/wp-content/uploads/2025/01/front-view-man-undergoing-therapy-1024x683.webp"
    },
    {
        title: "5 Simple ways to stay energized from sunrise to sunset",
        date: "January 24, 2025",
        excerpt:
            "Feeling your energy levels dip around midday or as the sun sets is all too common. This rollercoaster of fatigue not only impacts your productivity at work but can also...",
        link: "#",
        image:
            "https://noblestbeing.com/wp-content/uploads/2025/01/pexels-ali-naderi-22991-103889-1024x768.webp"
    },
    {
        title: "10 Simple stress reduction strategies for everyday life",
        date: "January 22, 2025",
        excerpt:
            "Stress has become an unavoidable part of our busy lives. With work deadlines, family responsibilities, and the relentless demands of everyday tasks, it’s no wonder that stress levels are on...",
        link: "#",
        image:
            "https://noblestbeing.com/wp-content/uploads/2025/01/pexels-olia-danilevich-8964952-1024x683.webp"
    },
    {
        title: "What is emotional abuse? Learn to spot the red flags",
        date: "January 20, 2025",
        excerpt:
            "Recognizing emotional abuse is essential for protecting mental health and fostering personal development. While emotional abuse may not be as apparent as physical abuse, its effects can be just as...",
        link: "#",
        image:
            "https://noblestbeing.com/wp-content/uploads/2025/01/young-child-suffering-abuse-with-shadow-1024x683.webp"
    },
    {
        title: "5 Breathing exercises to help you sleep better tonight",
        date: "January 17, 2025",
        excerpt:
            "A restful night’s sleep is essential to rejuvenate your mind, body, and soul. Yet, stress, anxiety, or a busy schedule can sabotage the chance to drift into dreamland for many...",
        link: "#",
        image:
            "https://noblestbeing.com/wp-content/uploads/2025/01/woman-sleeping-1024x683.webp"
    },
    {
        title: "7 effective weight loss exercises to boost your metabolism",
        date: "January 14, 2025",
        excerpt:
            "Did you know that 30 minutes of high-intensity exercise can burn up to 500 calories? This surprising fact shows how important the right exercises are for effective weight loss. 30...",
        link: "#",
        image:
            "https://noblestbeing.com/wp-content/uploads/2025/01/pexels-victorfreitas-841130-1024x683.webp"
    },
    {
        title: "10 Ways integral health and wellness can transform your life",
        date: "January 10, 2025",
        excerpt:
            "Have you ever felt like you’re just going through the motions, searching for harmony but struggling to find it? That’s where Integral Health and Wellness steps in a holistic approach...",
        link: "#",
        image:
            "https://noblestbeing.com/wp-content/uploads/2025/01/pexels-shu-lei-2809836-13865884-1024x683.webp"
    }
];
const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // only animate once
      easing: "ease-in-out", // smooth easing
    });
  }, []);

  return (
    <>
    <section className="p-6 space-y-6">
  {articles.map((item, index) => (
    <div
      key={index}
      className="bg-white dark:bg-black overflow-hidden rounded-xl shadow-md"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Image */}
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-76 object-cover"
          data-aos="zoom-in"
          data-aos-delay={index * 100}
        />
      )}

      {/* Content */}
      <div className="p-6">
        <h2
          className="text-2xl font-light mb-2 dark:text-white"
          data-aos="fade-right"
          data-aos-delay={index * 120}
        >
          {item.title}
        </h2>

        <p
          className="text-sm text-gray-500 dark:text-gray-400 mb-4"
          data-aos="fade-left"
          data-aos-delay={index * 140}
        >
          {item.date}
        </p>

        <p
          className="text-gray-700 dark:text-gray-300 mb-4"
          data-aos="fade-up"
          data-aos-delay={index * 160}
        >
          {item.excerpt}
        </p>

        <a
          href={item.link}
          className="inline-flex items-center gap-2 font-semibold text-sm text-gray-900 dark:text-white hover:text-blue-500"
          data-aos="fade-up"
          data-aos-delay={index * 180}
        >
          CONTINUE READING <span className="text-lg">→</span>
        </a>
      </div>
    </div>
  ))}
</section>

    </>
  );
};

export default Hero;
