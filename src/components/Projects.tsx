'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Tooltip } from 'react-tooltip';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Find Movies",
      description: "Uma aplicação que consome a API do TMDB e permite pesquisar filmes e salvar seus favoritos.",
      image: '/movies/home.png',
      githubLink: "https://github.com/Beattrriz/MovieList",
      technologies: [
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-line.svg" },
        { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" },
        { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-plain.svg" },
        { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" }
      ]
    },
    {
      id: 2,
      name: "TODO-API",
      description: "Uma API Rest de lista de tarefas com funcionalidades básicas de CRUD.",
      image: '/rest/todo.png',
      githubLink: "https://github.com/Beattrriz/TODO-API",
      technologies: [
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-line.svg" },
        { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" }
      ]
    }
  ];

  return (
    <section id="projetos" className="mt-20 pt-20 pb-20">
      <h2 className="text-3xl font-bold mb-6 text-center pb-10">Meus Projetos</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-transparent border border-pink-500 hover:shadow-xl transition-shadow"
          >
            <div className="w-full h-80 bg-gray-800 rounded-lg mb-4 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-semibold  mb-2 text-white">{project.name}</h3>
            <p className="text-lg mb-4 text-white">{project.description}</p>

            <div className="text-sm text-center mb-4 text-white">
              <div className="flex space-x-4 mt-2">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                  </div>
                ))}
              </div>
            </div>

           <div className="flex justify-end w-full">
           <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-2xl text-gray-500 hover:text-pink-500 transition-colors"
              data-tooltip-id={`tooltip-${project.id}`}
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" /> 
            </a>
           </div>
           <Tooltip id={`tooltip-${project.id}`} place="top" content="Ver repositório" />
          </div>
        ))}
      </div>
    </section>
  );
}