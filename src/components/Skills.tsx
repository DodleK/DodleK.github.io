
const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "R", "JavaScript"]
  },
  {
    title: "Data Tools & Technologies",
    skills: ["Tableau", "Power BI", "ETL", "Azure", "AWS", "PostgreSQL", "MySQL", "Pandas", "NumPy", "Matplotlib", "Beautiful Soup", "Excel", "VBA"]
  },
  {
    title: "Data Science & ML",
    skills: ["Machine Learning", "Data Analytics", "Statistical Analysis", "Deep Learning", "NLP", "Large Language Models", "Artificial Neural Networks", "TensorFlow", "Keras", "Scikit-Learn"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Jira", "Docker", "CI/CD", "Agile", "Project Management", "LaTeX"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Skills & Expertise</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="glass-card p-6 md:p-8 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
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

export default Skills;
