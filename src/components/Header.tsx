"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 bg-gradient-to-bl from-black via-pink-500 to-black py-3 px-10 shadow-sm flex items-center justify-between z-50">

            <div
                className="text-2xl font-bold text-white"
                style={{
                    fontFamily: '"Oleo Script", serif',
                }}
            >
                <a href="#sobre">Beatriz</a>
            </div>

            <button
                className="text-white text-2xl md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <nav className="hidden md:flex">
                <ul className="flex space-x-6">
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
                            className="text-white hover:text-purple-300 transition-colors duration-300"
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

            {menuOpen && (
                <nav className="absolute top-14 left-0 w-full bg-black/90 md:hidden">
                    <ul className="flex flex-col items-center space-y-5 py-5">
                        <li>
                            <a
                                href="#sobre"
                                className="text-white text-base hover:text-purple-300 transition-colors duration-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                Sobre
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projetos"
                                className="text-white text-base hover:text-purple-300 transition-colors duration-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                Projetos
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contato"
                                className="text-white text-base hover:text-purple-300 transition-colors duration-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

