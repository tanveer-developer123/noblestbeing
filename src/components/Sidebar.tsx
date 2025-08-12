const Sidebar = () => {
  const tags = [
    "anxiety",
    "anxiety disorder",
    "beyond yoga",
    "emotional abuse",
    "emotional energy",
    "emotional health",
    "emotional well-being",
    "exercise",
    "Fitness Goals",
    "Gym Workouts",
    "Healthy Habits",
    "Healthy Lifestyle",
    "meditation",
    "mental health",
    "mental health awareness",
    "mental health symptoms",
    "mental peace",
    "mental well-being",
    "mental wellness",
    "mindfulness",
    "panic attacks",
    "personal development",
    "personal development goals",
    "personal growth",
    "physical energy",
    "Physical Fitness",
    "physical health",
    "self love",
    "self-care",
    "self-care practices",
    "Self-Improvement",
    "sleep",
    "spiritual energy",
    "spiritual health",
    "spiritual well-being",
    "stress",
    "Stress management",
    "stress reduction",
    "weight loss",
    "weight loss exercise",
    "weight loss tips",
    "well-being",
    "yoga poses",
    "yoga practices",
  ];

  return (
    <aside className="lg:col-span-4">
      <div className="space-y-8">
        {/* Search */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Search</h3>
          <form
            action="https://noblestbeing.com/"
            method="get"
            className="flex gap-3"
          >
            <input
              name="s"
              type="text"
              placeholder="Search..."
              className="flex-1 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none dark:bg-gray-800 dark:text-white"
            />
            <button className="px-4 py-2 rounded-lg bg-site-primary text-white text-sm hover:opacity-90">
              Search
            </button>
          </form>
        </div>

        {/* Categories */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Categories</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Emotional Health", count: 2 },
              { name: "Mental Health", count: 10 },
              { name: "Physical Health", count: 3 },
              { name: "Spiritual Health", count: 2 },
            ].map((cat) => (
              <li key={cat.name}>
                <a
                  href="#"
                  className="hover:text-site-primary dark:text-gray-300 dark:hover:text-site-primary"
                >
                  {cat.name}{" "}
                  <span className="text-[var(--site-meta)]">{cat.count}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular posts */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Popular Posts</h3>
          <ul className="space-y-4">
            {[
              {
                title:
                  "Top 10 life-changing personal development goals you need",
                date: "February 4, 2025",
              },
              {
                title:
                  "Top 5 best types of yoga that enhances the spiritual well-being",
                date: "December 27, 2024",
              },
              {
                title:
                  "How to practice mindfulness: 10 ways to add it to your day",
                date: "December 27, 2024",
              },
              {
                title:
                  "4 stress management hacks to navigate other people’s stress",
                date: "December 30, 2024",
              },
              {
                title:
                  "How long does it take to build muscle? Here’s the truth",
                date: "December 30, 2024",
              },
            ].map((post) => (
              <li key={post.title}>
                <a href="#" className="block">
                  <div className="text-sm font-medium hover:text-site-primary dark:text-gray-300 dark:hover:text-site-primary">
                    {post.title}
                  </div>
                  <div className="text-xs text-[var(--site-meta)]">
                    {post.date}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 transition-colors">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <a
                key={t}
                href="#"
                className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-300 hover:bg-green-600 hover:text-white transition-colors"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
