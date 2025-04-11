
import { Calendar, Code, Brain, PieChart, LineChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: "Artificial neural network for emotion recognition using face detection",
    period: "Sep 2022 - Dec 2022",
    company: "University of North Texas",
    logo: "/lovable-uploads/dd317867-ff19-42ad-beb2-e9fe31463993.png",
    description: [
      "Designed and developed a facial expression recognition system using the FER-2013 dataset from Kaggle, applying neural networks for emotion detection.",
      "Implemented a multi-stage process, including face detection, feature extraction, and emotion classification, to address security, healthcare, and business applications.",
      "Optimized model performance by fine-tuning parameters, improving accuracy from 53.2% to 59.57% on validation data, mitigating overfitting issues for better generalization.",
      "Showcased strong skills in machine learning and computer vision, highlighting analytical and problem-solving abilities in emotion recognition and real-world applications."
    ],
    skills: ["Python", "Artificial Neural Networks", "TensorFlow", "Machine Learning", "Keras", "LaTeX"],
    icon: Brain
  },
  {
    title: "Risk Factor Prediction of Chronic Kidney Disease using Machine Learning Algorithms",
    period: "May 2023 - Jun 2023",
    company: "University of North Texas",
    logo: "/lovable-uploads/dd317867-ff19-42ad-beb2-e9fe31463993.png",
    description: [
      "Applied advanced predictive analytics to tackle the healthcare issue of Chronic Kidney Disease (CKD), employing five algorithms, including Naive Bayes, Random Forest, Logistic Regression, Support Vector Machine, and Linear Regression, to predict CKD risk factors.",
      "Utilized data analysis techniques to preprocess and clean healthcare datasets, ensuring accuracy and reliability in forecasting CKD risk.",
      "Achieved 98% accuracy with the Random Forest model, the highest among the algorithms, demonstrating effective model selection and optimization for predictive success.",
      "Showcased expertise in healthcare analytics and early disease prediction, highlighting the impact of data-driven decision-making in improving patient care outcomes."
    ],
    skills: ["Python", "pandas", "Matplotlib", "NumPy", "Machine Learning", "Scikit-Learn"],
    icon: LineChart
  },
  {
    title: "Sales Performance Dashboard",
    period: "Dec 2023 - Jan 2024",
    company: "University of North Texas",
    logo: "/lovable-uploads/dd317867-ff19-42ad-beb2-e9fe31463993.png",
    description: [
      "Developed a comprehensive Excel dashboard to track key sales metrics, visualize trends, and enhance decision-making for sales performance optimization.",
      "Implemented advanced features like pivot tables, slicers, and conditional formatting to create dynamic and interactive reports tailored for stakeholder analysis.",
      "Automated data updates using Excel macros and VBA scripts, ensuring real-time insights and reducing manual effort for the sales team.",
      "Identified sales trends and performance gaps through data-driven insights, enabling strategic adjustments to improve revenue and efficiency."
    ],
    skills: ["Data Cleaning", "Microsoft Excel", "Data Analysis"],
    icon: PieChart
  },
  {
    title: "HR Analytics Dashboard using Power BI",
    period: "Sep 2023 - Oct 2023",
    company: "University of North Texas",
    logo: "/lovable-uploads/dd317867-ff19-42ad-beb2-e9fe31463993.png",
    description: [
      "Designed an HR analytics dashboard using Power BI and Excel, visualizing employee attrition data, including demographics, education, salary, tenure, and satisfaction rates.",
      "Developed interactive reports with filters and slicers, enabling HR and management teams to conduct in-depth data analysis for workforce insights.",
      "Leveraged Power BI's data modeling and visualization capabilities to identify attrition trends, aiding strategic decision-making and employee retention efforts.",
      "Demonstrated expertise in data analysis and visualization, showcasing how technology enhances HR processes and drives data-informed workforce strategies."
    ],
    skills: ["Data Analysis", "Microsoft Excel", "Microsoft Power BI"],
    icon: LineChart
  },
  {
    title: "Hotel Recommendation Insights Dashboard",
    period: "Feb 2024 - Mar 2024",
    company: "University of North Texas",
    logo: "/lovable-uploads/dd317867-ff19-42ad-beb2-e9fe31463993.png",
    description: [
      "Scraped hotel recommendation data from TripAdvisor using Python, extracting hotel names, locations, customer ratings, review titles, and traveler types for analysis.",
      "Cleaned and preprocessed data in Python (pandas) by handling missing values, removing duplicates, and standardizing formats to ensure data consistency.",
      "Developed interactive Power BI dashboards to visualize customer ratings, review sentiments, and traveler preferences across different hotel locations.",
      "Generated data-driven insights to optimize hotel recommendations, improving customer satisfaction strategies based on real traveler feedback."
    ],
    skills: ["Python", "Data Cleaning", "Microsoft Excel", "Beautiful Soup", "Microsoft Power BI"],
    icon: Code
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Projects</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 p-3 rounded-md">
                        <project.icon className="h-6 w-6 text-purple-700" />
                      </div>
                      <div className="space-y-1">
                        <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{project.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <img 
                              src={project.logo} 
                              alt={project.company} 
                              className="h-4 w-4 rounded-full" 
                            />
                            <span>{project.company}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-3 mb-4">
                      {project.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="mt-4">
                      <p className="font-semibold text-gray-800 mb-2">Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-badge">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
