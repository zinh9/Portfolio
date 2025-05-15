import React from "react";
import { GraduationCap, Award } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  icon: "graduation" | "award";
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "UVV - Universidade Vila Velha",
      period: "Cursando",
      description:
        "Atualmente cursando Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento de software, banco de dados e engenharia de software.",
      icon: "graduation",
    },
    {
      degree: "Técnico em Informática",
      institution: "Instituto Federal do Espirito Santo (IFES) - Serra",
      period: "Completo | 2023 - 2025",
      description:
        "Formação técnica em Informática, com ênfase em desenvolvimento de sistemas e suporte técnico.",
      icon: "award",
    }
  ];

  return (
    <section
      id="education"
      className="py-16 md:py-24 bg-white dark:bg-slate-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            Educação
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-16"></div>

          <div className="space-y-8">
            {educationItems.map((item, index) => (
              <div
                key={index}
                className="relative pl-16 pb-8 border-l-2 border-blue-200 dark:border-slate-700 last:border-0"
              >
                <div className="absolute left-0 top-0 bg-blue-600 dark:bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center -translate-x-1/2">
                  {item.icon === "graduation" ? (
                    <GraduationCap size={20} className="text-white" />
                  ) : (
                    <Award size={20} className="text-white" />
                  )}
                </div>

                <div className="bg-gray-50 dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-1">
                    {item.institution}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    {item.period}
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
