import React from "react";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Desenvolvedor de Sistemas",
      company: "Vale S.A.",
      period: "Atuando",
      description: [
        "Desenvolvimento e manutenção de sistemas para a operação ferroviária da VM (Vitória a Minas).",
        "Utilização de tecnologias para construção de sistemas como ASP Classic, PHP, JavaScript, HTML, CSS e Boostrap.",
        "Trabalhar com sistemas de banco de dados, incluindo Access, SQL Server e MySQL.",
        "Implementação de dashboards utilizando Power BI e tratamento de dados com Power Query.",
        "Colaboração com equipes multifuncionais para entender requisitos e fornecer soluções eficazes.",
      ],
      skills: [
        "ASP Classic",
        "PHP",
        "JavaScript",
        "HTML",
        "CSS",
        "Boostrap",
        "SQL Server",
        "Access",
        "MySQL",
        "Power BI",
        "Power Query",
        "Excel",
      ],
    },
    {
      title: "Desenvolvedor Full Stack (Projeto Pessoal)",
      company: "Studio de Tatuagem (Projeto Autônomo)",
      period: "Janeiro 2025 - Março 2025",
      description: [
        "Propus e desenvolvi um sistema completo de agendamento de consultas e uma landing page para um estúdio de tatuagem de um amigo.",
        "Implementei funcionalidades como cadastro de clientes, histórico de orçamentos, gerenciamento de agendamentos e controle de autenticação.",
        "Utilizei boas práticas de desenvolvimento e segurança, além de um layout responsivo e otimizado para diferentes dispositivos.",
      ],
      skills: [
        "Java",
        "Spring Boot",
        "JPA",
        "Hibernate",
        "MySQL",
        "Spring Security",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            Experiência Profissional
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-16"></div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-slate-700"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center z-10">
                    <Briefcase size={20} className="text-white" />
                  </div>

                  {/* Content */}
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                    }`}
                  >
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-1">
                        {exp.company}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                        {exp.period}
                      </p>

                      <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700 dark:text-slate-300">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 dark:bg-slate-700 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for timeline alignment */}
                  <div className="md:w-1/2 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
