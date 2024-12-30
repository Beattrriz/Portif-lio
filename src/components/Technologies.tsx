import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faHtml5, faCss3Alt, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';  
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; 

export default function Technologies() {
  return (
    <section id="technologies" className="my-20 pt-20">
      <h2 className="text-3xl font-bold text-center mb-6">Tecnologias que eu utilizo:</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* JavaScript */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faJs} className="text-4xl mb-2 text-yellow-500" />
          <p className="text-lg">JavaScript</p>
        </div>
        {/* React */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faReact} className="text-4xl mb-2 text-blue-500" />
          <p className="text-lg">React</p>
        </div>
        {/* HTML5 */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faHtml5} className="text-4xl mb-2 text-orange-600" />
          <p className="text-lg">HTML5</p>
        </div>
        {/* CSS3 */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faCss3Alt} className="text-4xl mb-2 text-blue-600" />
          <p className="text-lg">CSS3</p>
        </div>
        {/* Node.js */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faNodeJs} className="text-4xl mb-2 text-green-600" />
          <p className="text-lg">Node.js</p>
        </div>
        {/* .NET */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faCogs} className="text-4xl mb-2 text-gray-700" />
          <p className="text-lg">C# / .NET</p>
        </div>
        {/* SQL Server */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faDatabase} className="text-4xl mb-2 text-blue-800" />
          <p className="text-lg">SQL Server</p>
        </div>
        {/* Angular */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faCogs} className="text-4xl mb-2 text-red-600" />
          <p className="text-lg">Angular</p>
        </div>
        {/* TypeScript */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faJs} className="text-4xl mb-2 text-blue-600" />
          <p className="text-lg">TypeScript</p>
        </div>
      </div>
    </section>
  );
}