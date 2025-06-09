import { contactMethods, socialLinks } from "@/lib/constants";
import ContactForm from "./ContactForm";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = "Have a project in mind or want to collaborate? I'd love to hear from you and discuss how we can bring your ideas to life."
const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden "
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 h-28">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            Get In Touch
          </h2>
          <TextGenerateEffect duration={5} filter={false} words={words} />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <a
                key={method.title}
                href={method.href}
                className="group backdrop-blur-sm bg-white/40 p-8 rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl hover:bg-white/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${400 + index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                      {method.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ContactForm />
          {/* Additional Info */}
          <div
            className="space-y-8 animate-fade-in"
            style={{ animationDelay: "1000ms" }}
          >
            {/* Social Links */}
            <div className="backdrop-blur-sm bg-white/40 p-8 rounded-2xl border border-white/30 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Connect With Me
              </h3>
              <div className="flex space-x-6">
                {socialLinks.map((social) => {
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-12 h-12 bg-white/60 rounded-xl flex items-center justify-center text-gray-600 ${social.color} hover:shadow-lg transition-all duration-300 hover:scale-110 border border-white/50`}
                      aria-label={social.name}
                    >
                      <img src={social.icon} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response Time */}
            <div className="backdrop-blur-sm bg-white/40 p-8 rounded-2xl border border-white/30 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Quick Response
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I typically respond to all inquiries within 24 hours. For urgent
                matters, feel free to reach out via phone or LinkedIn.
              </p>
            </div>

            {/* Availability */}
            <div className="backdrop-blur-sm bg-white/40 p-8 rounded-2xl border border-white/30 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Availability
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for new projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Open to collaborations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Freelance opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
