export default function Header() {
    return(
        <header
            className="fixed top-0 left-0 right-0 bg-gradient-to-bl from-black via-pink-500 to-black p-6 shadow-md flex items-center justify-between pr-10 pl-10 
            "
           
        >
            <div
                className="text-3xl font-bold"
                style={{
                    fontFamily: '"Oleo Script", serif',
                }}
            >
                 <a href="#sobre">Beatriz</a>
            </div>

            <nav>
                <ul className="flex space-x-8">
                    <li>
                        <a
                            href="#sobre"
                            className="text-white hover:text-purple-300 transition-colors duration-300"
                        >
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projetos"
                            className="text-white hover:text-purple-300 transition-colors  duration-300"
                        >
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contato"
                            className="text-white hover:text-purple-300 transition-colors duration-300"
                        >
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}