import { getAllProjects } from "@/lib/actions/projects.actions";
import { useQuery } from "@tanstack/react-query";
import BlurText from "./special-components/BlurText";
import { Badge } from "./ui/badge";
import { PulseLoader } from 'react-spinners';

const Projects = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
  });
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <BlurText
            text="Featured Projects"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl font-bold text-gray-800 mb-4 justify-center"
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            development
          </p>
        </div>
        {isLoading ? (
          <PulseLoader color="#3182ce"/>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`backdrop-blur-sm bg-white/40 rounded-2xl border border-white/30 shadow-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageurl}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {project.title}
                    </h3>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-200/50 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveurl}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githuburl}
                      className="text-gray-600 hover:text-gray-700 font-medium transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
