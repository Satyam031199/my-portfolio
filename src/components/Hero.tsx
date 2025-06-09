import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import useDownloadPdf from "@/hooks/useDownloadPdf";
import { TypewriterEffectSmooth } from "./ui/typewritter-effect";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const downloadPdf = useDownloadPdf();
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "Satyam",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Chaturvedi",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="mb-6">
            <TypewriterEffectSmooth words={words}/>
          </h2>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
            Full Stack MERN Developer
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, responsive web applications using MongoDB,
            Express.js, React, and Node.js. Passionate about creating seamless
            user experiences and robust backend solutions.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              View My Work
            </button>
            <button
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
              onClick={() =>
                downloadPdf("/resume.pdf", "Satyam_Chaturvedi_resume.pdf")
              }
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
