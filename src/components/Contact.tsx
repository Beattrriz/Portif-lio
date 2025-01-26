import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact(){
    return(
        <section id="contato"
        className="py-8 bg-gradient-to-bl from-black via-pink-500 to-black text-center">
        <div className="flex flex-col items-center space-y-8">
      
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">

          <div className="flex flex-col items-center">
            <a
              href="https://www.linkedin.com/in/beatriz-souza-603379194/"
              target="_blank"
              className="text-white hover:text-purple-300 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
            </a>
            <p className="text-sm text-white mt-1">LinkedIn</p>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="https://github.com/Beattrriz"
              target="_blank"
              className="text-white hover:text-purple-300 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
            </a>
            <p className="text-sm text-white mt-1">GitHub</p>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="mailto:byalt1228@gmail.com"
              className="text-white hover:text-purple-300 transition-colors duration-300"
              aria-label="E-mail"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-8 w-8" />
            </a>
            <p className="text-sm text-white mt-1">E-mail</p>
          </div>


          <div className="flex flex-col items-center">
            <a
              href="https://wa.me/5571982541679"
              target="_blank"
              className="text-white hover:text-purple-300 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="h-8 w-8" />
            </a>
            <p className="text-sm text-white mt-1">WhatsApp</p>
          </div>
        </div>
      </div>
        </section>
    );
}