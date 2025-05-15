import React, { useEffect, useState } from 'react';
import { ArrowRight, Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Desenvolvedor de Sistemas';
  
  useEffect(() => {
    let currentIndex = 0;
    let timer: NodeJS.Timeout;
    
    const type = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        timer = setTimeout(type, 100);
      }
    };
    
    timer = setTimeout(type, 1000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <div className="mb-6">
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Olá, meu nome é</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">Enzo Spadetto Rufino</h1>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300">
              <span className="inline-block min-h-[2rem]">{typedText}</span>
              <span className="animate-blink">|</span>
            </h2>
          </div>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto md:mx-0 mb-8">
            Sou desenvolvedor de sistemas, apaixonado por tecnologia e sempre em busca de novos desafios.
            <br />
            Estou sempre aprendendo e me aprimorando, buscando soluções inovadoras para problemas complexos.
            <br />
            Estou aqui para ajudar você a transformar suas ideias em realidade.
            <br />
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 flex items-center gap-2 font-medium"
            >
              Entre em contato <ArrowRight size={18} />
            </a>
            
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <a 
                href="https://github.com/zinh9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitHub size={22} />
              </a>
              <a 
                href="https://linkedin.com/in/enzo-spadetto-rufino-07b779219" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="mailto:enzospadettor@gmail.com" 
                className="p-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;