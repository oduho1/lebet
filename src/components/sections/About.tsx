import myImage from "../../assets/image.png"; // 

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium inline-block mb-3">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Who I Am
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Flex Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Image Section */}
          <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mx-auto">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4"></div>
              <img
                src={myImage}
                alt="Portrait of Oduho Ohisa, Full-Stack Developer"
                className="relative z-10 rounded-lg w-full h-auto object-cover shadow-lg border border-white"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-3/5">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
              Oduho Ohisa
            </h3>
            <h4 className="text-lg sm:text-xl text-blue-600 mb-4 sm:mb-6">
              Full-Stack Developer & Software Engineer
            </h4>

            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              I’m a full-stack developer with over 3 years of experience building
              scalable, secure, and high-performance web applications. I work
              across the entire stack — from modern frontend interfaces to
              robust backend systems and cloud deployments.
            </p>

            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              I’ve worked with startups, founders, and product teams to turn
              ideas into reliable software. My approach focuses on clean code,
              thoughtful architecture, and solutions that solve real business
              problems.
            </p>

            {/* Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
              {/* Education */}
              <div className="bg-gray-50 p-4 sm:p-5 rounded-lg">
                <h5 className="font-semibold mb-3 flex items-center text-gray-800 text-sm sm:text-base">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                  Education
                </h5>
                <ul className="text-gray-600 space-y-2 ml-7 text-sm sm:text-base">
                  <li className="list-disc">
                    Software Engineering & Web Development
                  </li>
                  <li className="list-disc">
                    Computer Science Fundamentals (Raspberry Pi Foundation)
                  </li>
                  <li className="list-disc">
                    Cloud & Backend Development Certifications
                  </li>
                </ul>
              </div>

              {/* Experience */}
              <div className="bg-gray-50 p-4 sm:p-5 rounded-lg">
                <h5 className="font-semibold mb-3 flex items-center text-gray-800 text-sm sm:text-base">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Experience
                </h5>
                <ul className="text-gray-600 space-y-2 ml-7 text-sm sm:text-base">
                  <li className="list-disc">
                    Full-Stack Developer
                  </li>
                  <li className="list-disc">
                    Backend Engineer, API & Database Systems
                  </li>
                  <li className="list-disc">
                    Web Design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
