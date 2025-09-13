import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter,Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'atsasidhar@gmail.com',
      link: 'atsasidhar@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7989278659',
      link: 'tel:+917989278659'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Vijayawada, Andhara Pradesh',
      link: 'https://maps.app.goo.gl/1z6AMZ364nAXXDtz8'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Thanmai-Sasidhar' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/thanmai-sasidhar-937805258/' },
    { icon: Instagram, label: 'Twitter', href: '#' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-red-50/50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a 
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors duration-200 group"
                    >
                      <div className="bg-pink-100 dark:bg-pink-600/20 p-3 rounded-full group-hover:bg-pink-200 dark:group-hover:bg-pink-600/30 transition-colors duration-200">
                        <Icon size={20} className="text-pink-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-500 transition-colors duration-300">{info.title}</p>
                        <p className="text-gray-900 dark:text-white font-medium transition-colors duration-300">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-gray-100 dark:bg-gray-800/50 p-3 rounded-full text-gray-600 dark:text-gray-400 hover:text-pink-500 hover:bg-pink-100 dark:hover:bg-pink-600/20 transition-all duration-200"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white/70 dark:bg-gray-800/70 p-8 rounded-2xl border border-pink-200/50 dark:border-pink-700/30 transition-colors duration-300 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">Send a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/80 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/80 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/80 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/80 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/25 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;