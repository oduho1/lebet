import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../../assets/photoroom.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      {/* Content container */}
      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
          
          {/* === Text Section === */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block backdrop-blur-md bg-white/40 px-4 py-2 rounded-full shadow-sm mb-6">
              <span className="text-blue-600 font-semibold text-sm">
                Full-Stack Developer & Software Engineer
              </span>
            </div>

            {/* Animated Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                <TypeAnimation
                  sequence={[
                    "Scalable Web Apps", 2000,
                    "Backend Systems", 2000,
                    "APIs & Microservices", 2000,
                    "Modern Frontends", 2000,
                    "End-to-End Solutions", 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Hi, I'm <span className="font-semibold text-gray-800">Oduho Ohisa</span>.  
              I design, build, and scale full-stack applications with clean code,
              solid architecture, and real-world performance in mind.
            </p>

            {/* Call-to-action buttons */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-5"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.a
                href="#portfolio"
                className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let’s Build Something
              </motion.a>
            </motion.div>
          </motion.div>

          {/* === Image Section === */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-28 h-28 bg-blue-100 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-yellow-100 rounded-full animate-pulse animation-delay-2000"></div>

              <img
                src={heroImage}
                alt="Software developer workspace"
                className="relative z-10 rounded-3xl shadow-2xl w-full max-w-md md:max-w-lg border border-gray-200"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
