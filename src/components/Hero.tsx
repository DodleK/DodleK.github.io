
import { ArrowDown, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-10 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 animate-fade-in">
            <img 
              src="/lovable-uploads/profilephoto.png" 
              alt="Kavya Kasthuri Dodle" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full mx-auto lg:mx-0 border-4 border-white shadow-xl"
            />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left animate-slide-right animate-delay-200">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
              Hello, I'm <span className="text-purple-600">Kavya Kasthuri Dodle</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mt-4 text-gray-700">
              Data Engineer & Analytics Expert
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              I transform raw data into actionable insights with expertise in Python, Azure, SQL and ETL pipelines, 
              building scalable and efficient data-driven solutions that power business decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-md bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="#experience" 
                className="px-6 py-3 rounded-md border border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transition-colors"
              >
                See My Work
              </a>
              <a 
                href="https://medium.com/@dodle" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-900 transition-colors flex items-center gap-2"
              >
                <ExternalLink size={16} />
                Read My Blog
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center animate-bounce">
          <a href="#about" className="inline-block p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all">
            <ArrowDown className="text-purple-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
