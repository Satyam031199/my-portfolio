import { currentlyLearning, skillCategories } from "@/lib/constants";
import TrueFocus from "./special-components/TrueFocus";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <TrueFocus
            sentence="Skills Technologies"
            manualMode={false}
            blurAmount={5}
            borderColor="blue"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`backdrop-blur-sm bg-white/30 dark:bg-white/5 p-8 rounded-2xl border border-white/20 dark:border-white/10 shadow-xl animate-fade-in`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                {category.title}
              </h3>

              <div
                className={`grid ${
                  categoryIndex === 2 ? "grid-cols-3" : "grid-cols-2"
                } gap-4`}
              >
                {category.skills.map((skill, skillIndex) => {
                  return (
                    <div
                      key={skill.name}
                      className="backdrop-blur-sm bg-white/40 dark:bg-white/10 p-4 rounded-xl border border-white/30 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{
                        animationDelay: `${
                          categoryIndex * 200 + skillIndex * 100
                        }ms`,
                      }}
                    >
                      <div className="flex flex-col items-center text-center space-y-2">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-r flex items-center justify-center`}
                        >
                          <img src={skill.icon} alt={skill.name} />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="backdrop-blur-sm bg-white/20 dark:bg-white/5 p-8 rounded-2xl border border-white/30 dark:border-white/10 shadow-xl inline-block">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
              Currently Learning
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {currentlyLearning.map((tech, index) => (
                <div
                  className="flex flex-col justify-center items-center gap-2"
                  key={index}
                >
                  <span
                    className={`px-4 py-2 ${tech.classNames} text-white text-sm rounded-full shadow-lg`}
                  >
                    {tech.name}
                  </span>
                  <img src={tech.icon} className="w-10 h-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
