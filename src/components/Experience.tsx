
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Data Engineer",
    company: "AVAN IT LLC",
    period: "May 2024 - Present",
    location: "United States",
    description: "Working on data engineering solutions to transform raw data into actionable insights.",
    logo: "/lovable-uploads/avanit-logo.png"
  },
  {
    title: "Student Assistant at Retail Dining",
    company: "University of North Texas",
    period: "Dec 2023 - May 2024",
    location: "Denton, Texas, United States",
    description: "Student Assistant at Food Court",
    logo: "/lovable-uploads/unt-logo.png"
  },
  {
    title: "Graduate Teaching Assistant",
    company: "University of North Texas",
    period: "Jan 2023 - May 2023",
    location: "United States",
    description: "Mentored students in analytics and data processing.",
    logo: "/lovable-uploads/unt-logo.png"
  },
  {
    title: "Data Analyst",
    company: "Cognizant",
    period: "Jun 2020 - Jul 2022",
    location: "India (Remote)",
    description: "Worked with various tools including Jira, Extract, Transform, Load (ETL) technologies and 24+ other skills.",
    logo: "/lovable-uploads/cognizant-logo.png"
  },
  {
    title: "Data Analyst",
    company: "Buzzworks Business Services Pvt. Ltd.",
    period: "Jan 2019 - Jun 2020",
    location: "Hyderabad, Telangana, India",
    description: "Used tools like Jira, MySQL and 12+ other skills.",
    logo: "/lovable-uploads/buzzworks-logo.png"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="mb-12 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-card p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white p-2 flex items-center justify-center shadow-md">
                      <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-purple-600 mt-1">{exp.company}</h4>
                    
                    <div className="flex flex-wrap items-center text-gray-600 mt-2">
                      <div className="flex items-center mr-4">
                        <Briefcase size={16} className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="mt-1 md:mt-0">
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="mt-4 text-gray-700">{exp.description}</p>
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

export default Experience;
