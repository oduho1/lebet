const Skills = () => {
  const frontendSkills = [
    { name: "React / Next.js", level: 95 },
    { name: "JavaScript / TypeScript", level: 92 },
    { name: "HTML5 & CSS3", level: 90 },
    { name: "Tailwind CSS", level: 94 },
    { name: "State Management", level: 88 },
  ];

  const backendSkills = [
    { name: "Node.js & Express", level: 93 },
    { name: "REST & GraphQL APIs", level: 90 },
    { name: "MongoDB & SQL", level: 88 },
    { name: "Authentication & Security", level: 85 },
    { name: "System Design", level: 82 },
  ];

  const stats = [
    { number: "50+", label: "Projects Built", icon: "M9 12l2 2 4-4" },
    { number: "3+", label: "Years Experience", icon: "M12 8v4l3 3" },
    { number: "10+", label: "Production Apps", icon: "M5 3v4M3 5h4" },
    { number: "100%", label: "Code Ownership", icon: "M14.828 14.828" },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium inline-block mb-3">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A snapshot of the technologies and engineering skills I use to
            build scalable, production-ready applications.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Skill Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
          {[
            { title: "Frontend Development", skills: frontendSkills, icon: "💻" },
            { title: "Backend & Systems", skills: backendSkills, icon: "⚙️" },
          ].map(({ title, skills, icon }, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-8 flex items-center">
                <span className="w-6 h-6 mr-2">{icon}</span>
                {title}
              </h3>

              <div className="space-y-8">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2 text-sm md:text-base">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={stat.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                  {stat.number}
                </h3>
                <p className="text-gray-700 text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
