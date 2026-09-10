export default function Technologies() {
  const techs = [
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-line.svg'},
    { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg' },
    { name: 'ASP.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg'},
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-plain.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg'},
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg' },
    { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { name: 'Postgresql', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg' },
  ];

  return (
    <section id="technologies" className="my-20 pt-20 pb-20">
      <h2 className="text-3xl font-bold text-center mb-6 pb-10">Tecnologias que eu utilizo:</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {techs.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center group">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-16 h-16 mb-2 transform transition-transform duration-300 group-hover:scale-110 filter group-hover:brightness-110"
              style={{ filter: "invert(51%) sepia(97%) saturate(748%) hue-rotate(290deg) brightness(97%) contrast(101%)" }}
            />
            <p className="text-lg font-medium text-gray-800">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}