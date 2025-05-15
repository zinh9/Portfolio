import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
  };
}

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projects: Project[] = [
    {
      title: "Sistema de Controle de Apresentações – Vale",
      description:
        "Sistema desenvolvido para gerenciar a apresentação diária de funcionários na Gerência da Operação 1 da Vale. A aplicação permite registrar e visualizar assinaturas de DSS e TAQ, com regras de tempo e validações por turno e supervisão. Inclui filtros dinâmicos, controle de múltiplos acessos.",
      image:
        "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg", // Imagem de formulários e documentos
      tags: ["ASP Classic", "HTML", "CSS", "JavaScript", "Bootstrap", "Access"],
      links: {},
    },
    {
      title: "Sistema de Agendamentos e Landing Page – Studio de Tatuagem",
      description:
        "Sistema web desenvolvido para um estúdio de tatuagem, com funcionalidades como cadastro de clientes, geração de orçamentos, histórico de atendimentos e controle de agendamentos. A aplicação também conta com uma landing page responsiva para atrair novos clientes.",
      image:
        "https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg", // Tatuador trabalhando
      tags: [
        "Java",
        "Spring Boot",
        "JPA",
        "Hibernate",
        "Spring Security",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: {
        github: "#",
      },
    },
    {
      title: "Sistema de Controle de Estoque – Desktop",
      description:
        "Aplicação desktop desenvolvida para controle de estoque de produtos, permitindo o cadastro, atualização, exclusão e consulta de itens. O foco foi criar uma interface intuitiva e eficiente para uso local, com funcionalidades robustas de gerenciamento e organização de estoque.",
      image:
        "https://images.pexels.com/photos/4348078/pexels-photo-4348078.jpeg", // Estoque organizado
      tags: ["JavaFX", "Java", "JPA", "Hibernate", "MySQL"],
      links: {
        github: "#",
      },
    },
    {
      title: "Dashboard de Localização de Materiais – Power BI",
      description:
        "Projeto desenvolvido em menos de um mês para a Gerência da Operação 1 da Vale, com o objetivo de localizar materiais de via férrea em pátios operacionais. Utilizei um gráfico de dispersão sobreposto a layouts personalizados de trilhos, simulando mapas dos pátios. O sistema permite que supervisores visualizem em tempo real a localização de materiais em linhas específicas.",
      image:
        "https://images.pexels.com/photos/8891886/pexels-photo-8891886.jpeg", // Layout de trilhos
      tags: ["Power BI", "Power Query", "DAX", "Excel"],
      links: {},
    },
    {
      title: "BI de Medição de Tempo de Trabalho – Operações Vale",
      description:
        "Dashboard desenvolvido para analisar os tempos de deslocamento, chegada ao posto e início das atividades dos funcionários de turno da Operação 1 da Vale. A ferramenta utiliza dados de amostragem coletados por guaritas e sistemas de rastreamento para medir com precisão o tempo até a primeira atividade. O BI permite filtrar por supervisão, turno e datas específicas, exibindo indicadores como atrasos, variação de tempo e impacto da chamada do CPT. Devido ao sucesso, o projeto está sendo expandido para as Operações 2 e 3.",
      image:
        "https://images.pexels.com/photos/8370758/pexels-photo-8370758.jpeg", // Business dashboard
      tags: ["Power BI", "Power Query", "DAX", "Excel", "Análise de Dados"],
      links: {},
    },
  ];

  const handleShowMore = () => {
    setVisibleProjects(projects.length);
  };

  const handleShowLess = () => {
    setVisibleProjects(3);
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-white dark:bg-slate-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            Projetos
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-10"></div>

          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi, abrangendo desde
            aplicações web até dashboards de análise de dados. Cada projeto
            reflete minha paixão por resolver problemas e criar soluções
            eficientes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-slate-600 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                    )}

                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1"
                      >
                        <ExternalLink size={18} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {projects.length > 3 && (
            <div className="flex justify-center mt-12">
              {visibleProjects < projects.length ? (
                <button
                  onClick={handleShowMore}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300"
                >
                  Mostrar Mais Projetos
                </button>
              ) : (
                <button
                  onClick={handleShowLess}
                  className="px-6 py-3 bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white rounded-md transition-colors duration-300"
                >
                  Mostrar Menos
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
