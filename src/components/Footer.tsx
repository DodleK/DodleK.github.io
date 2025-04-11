
import { Link } from 'react-router-dom';
import { LinkedinIcon, Mail, ArrowUp, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <Link to="/" className="text-2xl font-bold">
              Kavya Kasthuri Dodle<span className="text-purple-400">.</span>
            </Link>
            <p className="mt-2 text-gray-400">Data Engineer & Analytics Expert</p>
          </div>
          
          <div className="flex space-x-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About</a>
                <a href="#experience" className="text-gray-400 hover:text-purple-400 transition-colors">Experience</a>
                <a href="#education" className="text-gray-400 hover:text-purple-400 transition-colors">Education</a>
              </nav>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3">More</h4>
              <nav className="flex flex-col space-y-2">
                <a href="#skills" className="text-gray-400 hover:text-purple-400 transition-colors">Skills</a>
                <a href="#certifications" className="text-gray-400 hover:text-purple-400 transition-colors">Certifications</a>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
              </nav>
            </div>
          </div>
          
          <div className="text-center md:text-right mt-8 md:mt-0">
            <h4 className="text-lg font-semibold mb-3">Connect With Me</h4>
            <div className="flex space-x-4 justify-center md:justify-end">
              <a 
                href="mailto:kavya.dodle@outlook.com" 
                className="bg-gray-800 hover:bg-purple-600 p-3 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/dodlekavyakasthuri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-purple-600 p-3 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a 
                href="https://medium.com/@dodle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-purple-600 p-3 rounded-full transition-colors"
                aria-label="Medium"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kavya Kasthuri Dodle. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-purple-600 hover:bg-purple-700 p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
