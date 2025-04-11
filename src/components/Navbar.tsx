
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LinkedinIcon, Mail, FileText } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-purple-800">
            Kavya Kasthuri Dodle<span className="text-purple-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#certifications" className="nav-link">Certifications</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Social Links on Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="mailto:kavya.dodle@outlook.com" 
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/dodlekavyakasthuri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a 
              href="#" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-purple-600 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#about" onClick={closeMenu} className="nav-link">About</a>
              <a href="#experience" onClick={closeMenu} className="nav-link">Experience</a>
              <a href="#education" onClick={closeMenu} className="nav-link">Education</a>
              <a href="#projects" onClick={closeMenu} className="nav-link">Projects</a>
              <a href="#skills" onClick={closeMenu} className="nav-link">Skills</a>
              <a href="#certifications" onClick={closeMenu} className="nav-link">Certifications</a>
              <a href="#contact" onClick={closeMenu} className="nav-link">Contact</a>
              
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <a 
                  href="mailto:kavya.dodle@outlook.com" 
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/dodlekavyakasthuri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
                >
                  <FileText size={16} />
                  <span>Resume</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
