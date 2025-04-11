
import { Book } from 'lucide-react';

const educations = [
  {
    degree: "Master's degree, Data Science",
    institution: "University of North Texas",
    period: "Aug 2022 - May 2024",
    location: "Denton, Texas",
    logo: "/lovable-uploads/unt-logo.png",
    skills: "Exploratory Data Analysis, Cybersecurity and +9 skills"
  },
  {
    degree: "Bachelor of Technology - BTech, Computer Science",
    institution: "Jawaharlal Nehru Technological University",
    period: "Jul 2016 - Sep 2020",
    location: "Hyderabad, India",
    logo: "/lovable-uploads/jntuh-logo.png",
    skills: "Project Management, PostgreSQL and +4 skills"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Education</h2>
        
        <div className="max-w-4xl mx-auto">
          {educations.map((edu, index) => (
            <div 
              key={index} 
              className="mb-12 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-card p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white p-2 flex items-center justify-center shadow-md">
                      <img src={edu.logo} alt={edu.institution} className="max-w-full max-h-full" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                    <h4 className="text-lg font-semibold text-purple-600 mt-1">{edu.institution}</h4>
                    
                    <div className="flex flex-wrap items-center text-gray-600 mt-2">
                      <div className="flex items-center mr-4">
                        <Book size={16} className="mr-1" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="mt-1 md:mt-0">
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="mt-4 text-gray-700">{edu.skills}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
