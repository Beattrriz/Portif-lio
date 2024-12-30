export default function Header() {
    return(
        <header className="fixed top-0 left-0 right-0 bg-white p-4 shadow-md"
        style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
        >
        <nav>
            <ul className="flex justify-center space-x-8">
                <li><a href="#about" 
                className="text-white hover:text-pink-500 transition-colors duration-300">Sobre</a></li>
                <li><a href="#projects" 
                className="text-white hover:text-pink-500 transition-colors duration-300">Projetos</a></li>
                <li><a href="#contact" 
                className="text-white hover:text-pink-500 transition-colors duration-300">Contact</a></li>
            </ul>
        </nav>
    </header>
    );
}