import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Contact(){
    return(
        <section id="contato"
        className="py-8 bg-gradient-to-b from-black via-pink-500 to-black text-center">
            <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/beatriz-souza-603379194/"
          target="_blank"
          className="text-white hover:text-gray-300 transition-colors duration-300"
          aria-label="LinkedIn"
        >
           <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
        </a>
        <a
          href="https://github.com/Beattrriz"
          target="_blank"
          className="text-white hover:text-gray-300 transition-colors duration-300"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
        </a>
      </div>
        </section>
    );
}