import BlurText from "./special-components/BlurText";
import DecryptedText from "./special-components/DecryptedText";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            <DecryptedText
              text="About Me"
              animateOn="view"
              revealDirection="center"
            />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <BlurText
              text="With over 3 years of experience in full-stack development, I specialize in building modern web applications using the MERN stack. My journey began with a fascination for creating digital solutions that solve real-world problems. I believe in writing clean, maintainable code and staying up-to-date with the latest technologies. When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, or mentoring aspiring developers."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
            />
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="backdrop-blur-sm bg-white/30 dark:bg-white/10 p-6 rounded-xl border border-white/20 dark:border-white/10 shadow-lg">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Frontend
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  React, TypeScript, Tailwind CSS
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/30 dark:bg-white/10 p-6 rounded-xl border border-white/20 dark:border-white/10 shadow-lg">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Backend
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Node.js, Express, MongoDB
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="backdrop-blur-sm bg-white/20 dark:bg-white/5 p-8 rounded-2xl border border-white/30 dark:border-white/10 shadow-xl">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    React & Frontend
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    95%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 h-2 rounded-full w-[95%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Node.js & Backend
                  </span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    90%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 h-2 rounded-full w-[90%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Database Design
                  </span>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">
                    85%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
