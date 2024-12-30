import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-6 md:space-y-0 my-40">
      <div className="flex items-center justify-center w-full md:w-3/4 space-y-6 md:space-y-0 p-6">
        <div className="text-center md:text-left mb-4 md:mb-0 w-full md:w-1/2 px-4 md:px-0">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Olá! Eu sou a Bia!
            <br />
            <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              FullStack Developer
            </span>
          </h1>
          <p className="text-lg md:text-xl">
            É um prazer ter você aqui!<br />
            Sou uma desenvolvedora apaixonada por tecnologia e pela criação de soluções inovadoras. 
            Tenho experiência em C#, .NET e Angular, 
            e estou sempre em busca de novos desafios e oportunidades para aprender e crescer profissionalmente.
          </p>
        </div>

        {/* Imagem */}
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
  );
}