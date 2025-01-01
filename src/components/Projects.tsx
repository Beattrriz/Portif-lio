'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProjectId, setCurrentProjectId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      name: "Find Movies",
      description: "Uma aplicação que consome a API do TMDB e permite pesquisar filmes e salvar seus favoritos.",
      images: [
        '/movies/home.png',
        '/movies/detalhes.png',
        '/movies/favoritos.png', 
        '/movies/login.png',
        '/movies/registro.png'
      ],
      githubLink: "https://github.com/Beattrriz/MovieList"
    },
    {
      id: 2,
      name: "TODO-API",
      description: "Uma aplicação de lista de tarefas com funcionalidades básicas de CRUD.",
      images: [
        '/rest/todo.png'
      ],
      githubLink: "https://github.com/Beattrriz/TODO-API"
    }
  ];

  const handleImageClick = (projectId: number, index: number) => {
    setCurrentProjectId(projectId);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentProjectId(null);
  };

  const handleNextImage = () => {
    if (currentProjectId === null) return;
    const project = projects.find(p => p.id === currentProjectId);
    if (!project) return;

    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrevImage = () => {
    if (currentProjectId === null) return;
    const project = projects.find(p => p.id === currentProjectId);
    if (!project) return;

    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <section id="projects" className="mt-20 pt-20 pb-20">
      <h2 className="text-3xl font-bold mb-6 text-center pb-10">Meus Projetos</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div
              className="w-full h-80 bg-gray-200 rounded-lg mb-4 cursor-pointer"
              onClick={() => handleImageClick(project.id, 0)}
            >
              <img
                src={project.images[0]}
                alt={project.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">{project.name}</h3>
            <p className="text-lg mb-4 text-gray-900">{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-lg text-gray-700 hover:text-pink-500 transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" /> 
            </a>
          </div>
        ))}
      </div>

      {isModalOpen && currentProjectId !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg relative max-w-3xl w-full">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-2xl text-gray-700 hover:text-gray-900"
            >
              &times;
            </button>
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevImage}
                className="text-2xl text-gray-700 hover:text-gray-900"
              >
                &lt;
              </button>
              <img
                src={projects.find(p => p.id === currentProjectId)?.images[currentImageIndex]}
                alt={`Imagem ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[70vh] object-cover rounded-lg"
              />
              <button
                onClick={handleNextImage}
                className="text-2xl text-gray-700 hover:text-gray-900"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}