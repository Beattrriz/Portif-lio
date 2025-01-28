import Image from "next/image";
import { FaFileAlt } from "react-icons/fa";

export default function About() {
  return (
    <section id="sobre">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:space-x-8 space-y-6 md:space-y-0 my-40">
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-3/4 p-6 space-y-6 md:space-y-0">
          <div className="text-center md:text-left w-full md:w-1/2 flex flex-col items-center md:items-start px-4 md:px-0">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Olá! Eu sou a Bia!
              <br />
              <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                FullStack Developer
              </span>
            </h1>
            <p className="text-lg md:text-xl">
              É um prazer ter você aqui!
              <br />
              Sou uma desenvolvedora apaixonada por tecnologia e pela criação de soluções inovadoras. Tenho experiência em
              C#, .NET e Angular, e estou sempre em busca de novos desafios e oportunidades para aprender e crescer
              profissionalmente.
            </p>
            <a
              href="/CV/Beatriz-Santos-Curriculo.pdf"
              target="_blank"
              className="mt-6 inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 text-white rounded-full shadow-md hover:bg-gradient-to-l transition-all duration-300"
            >
              <FaFileAlt className="h-5 w-5" />
              <span>Meu CV</span>
            </a>
          </div>

          <div className="flex justify-center w-full md:w-1/2">
            <Image
              src="/foto-perfil.jpg"
              alt="Beatriz"
              width={500}
              height={500}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}