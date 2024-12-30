'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export default function Projects(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const images = [ 
        {
            id: 1,
            name: "Find Movies",
            description: "Uma aplicação que permite pesquisar filmes e salvar seus favoritos.",
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
              "/rest/todo.png" 
            ],
            githubLink: "https://github.com/Beattrriz/TODO-API"
          }
  ];

  const handleImageClick = (index: number) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="projects" className="my-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Meus Projetos</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-full h-80 bg-gray-200 rounded-lg mb-4 cursor-pointer" onClick={() => handleImageClick(0)}>
            <img
              src="/movies/home.png" 
              alt="Find Movies"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">Find Movies</h3>
          <p className="text-lg mb-4 text-gray-900">Uma aplicação que permite pesquisar filmes e salvar seus favoritos consumindo a API do TMDB.</p>
          <a
            href="https://github.com/Beattrriz/MovieList"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg text-gray-700 hover:text-pink-500 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" /> 
          </a>
        </div>
        
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-full h-80 bg-gray-200 rounded-lg mb-4 cursor-pointer" onClick={() => handleImageClick(0)}>
            <img
              src="/rest/todo.png" 
              alt="TODO-API"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">TODO-API</h3>
          <p className="text-lg mb-4 text-gray-900">Uma aplicação de lista de tarefas com funcionalidades básicas de CRUD.</p>
          <a
            href="https://github.com/Beattrriz/TODO-API" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg text-gray-700 hover:text-pink-500 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" /> 
          </a>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-2xl text-gray-700 hover:text-gray-900"
            >
              &times;
            </button>
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={handlePrevImage}
                className="text-2xl text-gray-700 hover:text-gray-900"
              >
                &lt;
              </button>
              <img
                src={images[currentImage]}
                alt={`Projeto ${currentImage + 1}`}
                className="w-full h-64 object-cover rounded-lg"
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