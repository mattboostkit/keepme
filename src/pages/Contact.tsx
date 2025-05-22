// React import removed - not needed in modern React
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import FaqAccordion from '../components/FaqAccordion';

function Contact() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-[#f3d3c4]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Get in <span className="text-brand-accent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Are you ready to start your journey with KeepMe Lifestyle? Contact us today to discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4cfd9] placeholder-gray-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4cfd9] placeholder-gray-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4cfd9] placeholder-gray-500"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4cfd9] placeholder-gray-500"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4cfd9] placeholder-gray-500"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="privacy" className="mt-1 h-5 w-5" required />
                  <label htmlFor="privacy" className="ml-3 text-gray-700 text-base">
                    I agree to the <a href="/privacy-policy" className="text-[#f4cfd9] hover:underline">Privacy Policy</a> and consent to having my data processed.
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-[#f4cfd9] text-white px-8 py-3 rounded-lg hover:bg-[#f4cfd9]/80 transition-colors flex items-center justify-center w-full"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#f4cfd9]/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-[#f4cfd9]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Our Location</h3>
                      <p className="text-gray-600">16 Quadrant Court, Dartford<br/>Greenhithe DA9 9AY</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#f4cfd9]/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-[#f4cfd9]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email Us</h3>
                      <p className="text-gray-600">hello@keepme.co.uk</p>
                      {/* Removed second email line */}
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#f4cfd9]/20 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-[#f4cfd9]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Call Us</h3>
                      <p className="text-gray-600">+44 (0)1322 381144</p>
                      {/* Removed second phone line */}
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#f4cfd9]/20 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-[#f4cfd9]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 text-center">Our Location</h3>
            <div className="rounded-xl overflow-hidden h-96 shadow-lg md:col-span-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.247800939565!2d0.2688733775436449!3d51.45360661463063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b13794355e99%3A0xbfb57953d02877c2!2sKeepme%20LifeStyle%20Ltd!5e0!3m2!1sen!2suk!4v1744043045392!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KeepMe LifeStyle Ltd Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-[#f4cfd9]">Questions</span>
            </h2>
            <p className="text-gray-600">
              Find quick answers to common enquiries about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <FaqAccordion
              items={[
                {
                  question: "What is the minimum order quantity?",
                  answer: "Our minimum order quantities vary by product type. Stock Glass Bottles and Caps typically require a minimum of 1,000 units (this can increase depending on capacity and complexity), whilst Bespoke Glass Bottles and Caps have an MOQ of 10,000 units. Decoration MOQ’s vary between 500-5,000 units."
                },
                {
                  question: "How long does the production process take?",
                  answer: "We recommend 6 months when custom moulds aren’t required, bespoke projects may require up to 9 months depending on complexity and required components. Our team will issue a Critical Path during the Development and Evaluation stages"
                },
                {
                  question: "Do you offer sampling services?",
                  answer: "Yes, all our components and finishes will undergo a Development and Sampling stage. Our team are able to supply Technical Drawings and product prototypes. Sample fees may apply but are typically credited toward your first order."
                },
                {
                  question: "What regions do you ship to?",
                  answer: "We ship globally with established logistics networks in Europe, North America, Asia, and the Middle East. Custom shipping arrangements can be made for other regions. Our experienced and dedicated Operations Team will help manage all inbound and outbound deliveries"
                },
                {
                  question: "Do you offer an end to end service?",
                  answer: "Yes, we specialise in all stages of Development and Production. From concept to delivery we can support you. Many of our clients utilise all of our services, from Creative Design, to Sampling, Production, Shipping, Blending of oils, Testing, Filling and Assembly of finished goods"
                },
                {
                  question: "Can you help with regulatory compliance?",
                  answer: "Absolutely. We ensure all our products meet regulatory requirements for their intended markets, including EU, UK, US, and other international standards. Our Team can also support with the Back of Pack labelling and appropriate warning symbols."
                }
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;