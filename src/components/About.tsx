import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-blue-100 dark:border-slate-700 shadow-lg max-w-xs mx-auto">
                <img
                  src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
                  alt="Profile placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2 text-slate-700 dark:text-slate-300">
              <p className="mb-4">
                Olá! Sou um Desenvolvedor de Sistemas apaixonado, atualmente
                trabalhando na Vale, nos sistemas Vitória a Minas (VM). Possuo
                sólida experiência em desenvolvimento full-stack, com expertise
                em diversas tecnologias e frameworks.
              </p>

              <p className="mb-4">
                Atualmente cursando Análise e Desenvolvimento de Sistemas na
                Faculdade UVV, estou constantemente expandindo meus
                conhecimentos e habilidades na área de engenharia de software.
                Também concluí minha formação técnica em Informática no
                Instituto Federal do Espírito Santo (IFES) - Serra.
              </p>

              <p className="mb-4">
                Minha trajetória profissional me equipou com um conjunto
                diversificado de habilidades, abrangendo desde tecnologias
                back-end, como Java com Spring Boot, até desenvolvimento
                front-end com HTML, CSS e JavaScript. Tenho interesse particular
                em construir aplicações robustas e escaláveis ​​que resolvam
                problemas do mundo real.
              </p>

              <p>
                Quando não estou programando, você pode me encontrar estudando,
                ou também jogando, tocando algum instrumento, ou fazendo alguma
                atividade esportiva. Acredito no aprendizado contínuo e em me
                manter atualizado com as últimas tendências tecnológicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
