
import { useState } from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Attempting to send email with the following parameters:');
      
      // EmailJS service parameters - using the correct IDs provided
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Kavya', // Your name
      };
      
      console.log('Template params:', templateParams);
      console.log('Using service ID:', 'service_bxdwwo6');
      console.log('Using template ID:', 'template_cgrw7op');

      // Send the email using EmailJS with proper error handling
      const response = await emailjs.send(
        'service_bxdwwo6', // Your EmailJS service ID
        'template_cgrw7op', // Your EmailJS template ID
        templateParams,
        'Tt56yk8HcSwoxtvxW' // Your EmailJS user ID
      );
      
      console.log('EmailJS response:', response);
      
      if (response.status === 200) {
        // Display success toast
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        // Reset the form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(`EmailJS returned status ${response.status}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      
      // More detailed error message
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please check your network connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-purple-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative inline-block">
          Get In Touch
          <span className="absolute -bottom-2 left-0 h-1 w-2/3 bg-purple-400 rounded-full"></span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-800 p-3 rounded-lg mr-4">
                    <Mail size={20} className="text-purple-200" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-purple-200">Email</h4>
                    <a href="mailto:kavya.dodle@outlook.com" className="text-white hover:text-purple-300 transition-colors">
                    kavya.dodle@outlook.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-800 p-3 rounded-lg mr-4">
                    <Linkedin size={20} className="text-purple-200" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-purple-200">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/dodlekavyakasthuri" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-300 transition-colors"
                    >
                      linkedin.com/in/dodlekavyakasthuri
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Let's Connect!</h3>
                <p className="text-purple-200">
                  I'm actively looking for data-related roles—feel free to reach out via email or connect with me on LinkedIn!
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in animate-delay-200">
              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-purple-800/50 border border-purple-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-purple-800/50 border border-purple-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-purple-200 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-purple-800/50 border border-purple-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Your message"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 rounded-md text-white font-medium transition-colors flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  ) : null}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
