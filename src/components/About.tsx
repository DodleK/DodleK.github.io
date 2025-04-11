
import { User, Book, Code, FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">About Me</h2>
          
          <div className="mt-8 animate-fade-in">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              As a Data Engineer, I thrive on transforming raw data into actionable insights. With expertise in Python, Microsoft Azure,
              SQL, and ETL pipelines, I build scalable and efficient data-driven solutions that power business decisions.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              My journey began with a Master's in Data Science from the University of North Texas, where I also honed my skills as a
              Graduate Teaching Assistant, mentoring students in analytics and data processing. Prior to that, I earned my Bachelor's in
              Computer Science from Jawaharlal Nehru Technological University, which laid the foundation for my passion for data science
              and engineering.
            </p>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">What sets me apart?</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 animate-slide-up animate-delay-100">
                <div className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-3 mr-4">
                    <FileText className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">5+ Years of Experience</h4>
                    <p className="text-gray-600">Including working with insurance data at MetLife and diverse industry experiences.</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 animate-slide-up animate-delay-200">
                <div className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-3 mr-4">
                    <Code className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Data Integration & Automation</h4>
                    <p className="text-gray-600">Strong background in data integration, automation, and reporting solutions.</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 animate-slide-up animate-delay-300">
                <div className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-3 mr-4">
                    <User className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Technology Enthusiast</h4>
                    <p className="text-gray-600">Passionate about learning new technologies, especially GenAI and cloud solutions.</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 animate-slide-up animate-delay-400">
                <div className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-3 mr-4">
                    <Book className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Beyond Work</h4>
                    <p className="text-gray-600">I enjoy diving into webtoons, engaging with data-driven storytelling, and exploring AI creativity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
