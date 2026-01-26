import React, { useState } from 'react';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmitMessage {
  type: 'success' | 'error';
  text: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<SubmitMessage | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Replace with your deployed backend URL or localhost for testing
      const response = await axios.post(
        'https://lebet-backend.vercel.app/contact',
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );

      setSubmitMessage({ type: 'success', text: response.data.message });
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(null), 5000);

    } catch (error: any) {
      setSubmitMessage({
        type: 'error',
        text: error.response?.data?.message || 'Failed to send message',
      });

      setTimeout(() => setSubmitMessage(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', title: 'Email', info: 'albanooduho@gmail.com', bg: 'bg-blue-50', iconColor: 'text-blue-600' },
    { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', title: 'Phone', info: '+254727609518', bg: 'bg-green-50', iconColor: 'text-green-600' },
    { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', title: 'Location', info: 'Kakuma Refugee Camp, Creative City', bg: 'bg-yellow-50', iconColor: 'text-yellow-600' },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium inline-block mb-3">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactItems.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border">
                <div className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <svg className={`w-7 h-7 ${item.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.info}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

            {submitMessage && (
              <div className={`p-4 mb-6 rounded ${submitMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {submitMessage.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Your Name" />
              <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Your Email" />
              <input name="subject" value={formData.subject} onChange={handleChange} required className="w-full p-3 border rounded" placeholder="Subject" />
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full p-3 border rounded" placeholder="Your Message" />

              <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-70">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
