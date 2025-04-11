
const certifications = [
  {
    title: "Tableau Certified Data Analyst",
    issuer: "Udemy",
    date: "Jul 2024",
    logo: "/lovable-uploads/udemy.png",
    skills: ["Tableau"]
  },
  {
    title: "Introduction to Python",
    issuer: "DataCamp",
    date: "Sep 2023",
    logo: "/lovable-uploads/datacamp.png",
    skills: ["Python", "Data Analysis"]
  },
  {
    title: "Data Analytics and Visualization Virtual Experience",
    issuer: "Accenture",
    date: "Aug 2023",
    logo: "/lovable-uploads/Accenture-logo.jpg",
    skills: ["Data Analytics", "Data Visualization"]
  },
  {
    title: "Excel: Mother of Business Intelligence",
    issuer: "Codebasics",
    date: "Jan 2025",
    logo: "/lovable-uploads/codebasics-logo.jpeg",
    skills: ["Microsoft Excel"]
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "DataCamp",
    date: "Oct 2024",
    logo: "/lovable-uploads/datacamp.png",
    skills: ["Microsoft Azure"]
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google",
    date: "Jul 2024",
    logo: "/lovable-uploads/google.jpeg",
    skills: ["LLMs", "NLP", "AI"]
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Certifications</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="glass-card p-6 animate-fade-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center shadow-sm">
                    <img src={cert.logo} alt={cert.issuer} className="max-w-full max-h-full" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold text-gray-800">{cert.title}</h3>
                    <p className="text-sm text-purple-600">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 mb-3">Issued {cert.date}</div>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
