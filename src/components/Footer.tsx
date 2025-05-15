import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-blue-400 mb-2">
                Enzo Spadetto Rufino
              </h2>
              <p className="text-slate-400 max-w-xs">
                Desenvolvedor de sistemas especializado em criar experiências
                digitais excepcionais.
              </p>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-3">Entre em contato comigo</h3>
              <div className="flex items-center gap-4 justify-center md:justify-end">
                <a
                  href="https://github.com/zinh9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/enzo-spadetto-rufino-07b779219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:enzospadettor@gmail.com"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-800 my-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center shadow-lg text-white"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
