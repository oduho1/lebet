import { useState, useEffect, useCallback } from "react";

const Portfolio = () => {
  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Full Stack",
    "Cloud",
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery] = useState("");

  // Slideshow images (developer vibe)
  // (Removed unused slideshow state and effect)

  // 🔥 FULL-STACK PROJECTS
  const projects = [
    {
      id: 1,
      title: "SaaS Project Management Platform",
      category: "Full Stack",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984",
      description:
        "A full-stack SaaS application built with React, Node.js, MongoDB, and JWT authentication featuring role-based access and real-time updates.",
    },
    {
      id: 2,
      title: "E-Commerce Backend API",
      category: "Backend",
      image:
        "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5",
      description:
        "Scalable REST API built with Node.js, Express, PostgreSQL, and Redis supporting payments, inventory, and order processing.",
    },
    {
      id: 3,
      title: "Modern React Dashboard",
      category: "Frontend",
      image:
        "https://images.unsplash.com/photo-1545235617-9465d2a55698",
      description:
        "High-performance admin dashboard built with React, TypeScript, Tailwind CSS, and reusable component architecture.",
    },
    {
      id: 4,
      title: "Authentication & Authorization System",
      category: "Backend",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      description:
        "Secure authentication system using JWT, OAuth, password hashing, refresh tokens, and protected API routes.",
    },
    {
      id: 5,
      title: "Cloud-Deployed Web Application",
      category: "Cloud",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      description:
        "Production-ready web application deployed on AWS using EC2, S3, Nginx, Docker, and CI/CD pipelines.",
    },
    {
      id: 6,
      title: "Real-Time Chat Application",
      category: "Full Stack",
      image:
        "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3",
      description:
        "Real-time messaging app built with React, Node.js, WebSockets, MongoDB, and user presence tracking.",
    },
  ];

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const matchesSearch = (title: string, description: string) => {
    if (!normalizedQuery) return true;
    return (
      title.toLowerCase().includes(normalizedQuery) ||
      description.toLowerCase().includes(normalizedQuery)
    );
  };

  const filteredProjects =
    (activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)
    ).filter((p) => matchesSearch(p.title, p.description));

  const INITIAL_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [activeCategory, searchQuery]);

  const hasMore = filteredProjects.length > visibleCount;
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  // Modal state
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const openModalAt = useCallback((index: number) => setActiveIndex(index), []);


  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium inline-block mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Engineering Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of full-stack, backend, frontend, and cloud-based
            applications built with modern technologies.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <button
                  onClick={() => openModalAt(idx)}
                  className="text-blue-600 font-medium hover:underline"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisibleCount((c) => c + 6)}
              className="px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
