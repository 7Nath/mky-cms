import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact | Consulting Firm</title>
      </Head>
      <section className="py-16 container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
        {submitted ? (
          <p className="text-green-600">Thank you for your message. We'll get back to you shortly.</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" name="name" required className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" name="email" required className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea id="message" name="message" rows="6" required className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" value={formData.message} onChange={handleChange} />
            </div>
            <button type="submit" className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition">Send Message</button>
          </form>
        )}
        <div className="mt-12 text-center">
          <p className="text-gray-700">Or reach us at:</p>
          <p className="text-gray-700">123 Consulting Ave, Suite 500, City, Country</p>
          <p className="text-gray-700">Email: contact@consultingfirm.com</p>
          <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
        </div>
      </section>
    </>
  );
}