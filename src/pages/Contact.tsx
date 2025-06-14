import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <main
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-200"
        role="main"
        aria-label="Contact Form Success"
      >
        <section className="max-w-lg mx-auto text-center" aria-live="polite">
          <div className="mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 dark:bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span role="img" aria-label="Success" className="text-green-800 dark:text-green-200">✓</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-3 sm:mb-4 text-black dark:text-white">
              Thank You!
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
              Your message has been sent successfully. I'll get back to you soon!
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen px-4 sm:px-6 md:px-20 py-8 sm:py-12 md:py-16 bg-white dark:bg-gray-900 transition-colors duration-200"
      role="main"
      aria-label="Contact Form"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <header className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 sm:mb-4 text-black dark:text-white">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat about design? I'd love to hear from you.
            Drop me a message and let's create something amazing together.
          </p>
        </header>

        {/* Contact Form */}
        <section className="bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto transition-colors duration-200" aria-label="Contact Form Section">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-black dark:text-white">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate aria-live="polite">
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name <span className="text-red-500 dark:text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  autoComplete="name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-black dark:text-white text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address <span className="text-red-500 dark:text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  autoComplete="email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-black dark:text-white text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject <span className="text-red-500 dark:text-red-400">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-black dark:text-white text-sm sm:text-base"
                placeholder="Project Inquiry"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message <span className="text-red-500 dark:text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 resize-none text-black dark:text-white text-sm sm:text-base"
                placeholder="Tell me about your project or just say hello..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="font-sans text-sm sm:text-base uppercase text-black dark:text-white cursor-pointer border-2 border-black dark:border-white px-6 sm:px-8 py-3 sm:py-4 shadow-[1px_1px_0px_0px,_2px_2px_0px_0px,_3px_3px_0px_0px,_4px_4px_0px_0px,_5px_5px_0px_0px] dark:shadow-[1px_1px_0px_0px_theme(colors.white),_2px_2px_0px_0px_theme(colors.white),_3px_3px_0px_0px_theme(colors.white),_4px_4px_0px_0px_theme(colors.white),_5px_5px_0px_0px_theme(colors.white)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-200 bg-white dark:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none"
              aria-busy={isSubmitting}
              aria-label={isSubmitting ? "Sending message" : "Send message"}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Contact; 