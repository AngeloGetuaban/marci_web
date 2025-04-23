import React from 'react';

const ContactPage = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-serif text-center text-gray-800 mb-20">Call or Visit</h2>

        <div className="grid md:grid-cols-2 gap-20">
          {/* Contact Form */}
          <form className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Message</h3>

              <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white shadow-sm focus:ring-2 focus:ring-gray-700 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                Email*
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white shadow-sm focus:ring-2 focus:ring-gray-700 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white shadow-sm focus:ring-2 focus:ring-gray-700 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-gray-700 transition"
            >
              Send
            </button>

            <p className="text-xs text-gray-500">
              This form is protected by reCAPTCHA and subject to the Google{' '}
              <a href="https://policies.google.com/privacy" className="underline" target="_blank" rel="noreferrer">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="https://policies.google.com/terms" className="underline" target="_blank" rel="noreferrer">
                Terms of Service
              </a>.
            </p>
          </form>

          {/* Contact Info */}
          <div className="space-y-10">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/12069196886"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.1 13.3c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.2-.5.2s-.6.7-.8.8c-.1.1-.3.1-.5 0s-1-.4-1.9-1.2c-.7-.6-1.2-1.3-1.3-1.5-.1-.2 0-.4.1-.5s.2-.3.3-.5c.1-.1.1-.3 0-.5-.1-.1-.5-1.2-.7-1.6s-.4-.4-.6-.4-.3 0-.4 0c-.2 0-.5 0-.7.3s-1 .9-1 2.1 1 .7 1.1.8c0 .1 1.9 3.2 4.7 4.4.6.3 1.1.5 1.5.6.6.2 1.2.2 1.7.1.5-.1 1.2-.5 1.4-1.1.2-.6.2-1.1.1-1.2-.1 0-.3-.1-.5-.2z" />
              </svg>
              Message us on WhatsApp
            </a>

            {/* Office Info */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Marci Metzger – THE RIDGE REALTY GROUP
              </h4>
              <p className="text-gray-700 mb-1">
                3190 HW-160, Suite F,<br />
                Pahrump, Nevada 89048, United States
              </p>
              <a href="tel:2069196886" className="text-indigo-600 hover:underline font-medium">
                (206) 919-6886
              </a>
            </div>

            {/* Office Hours */}
            <div>
              <h5 className="text-lg font-semibold text-gray-800 mb-1">Office Hours</h5>
              <p className="text-gray-700">Open today <strong>08:00 a.m. – 07:00 p.m.</strong></p>
              <p className="text-gray-700">Open daily 8:00 am – 7:00 pm</p>
              <p className="text-sm text-gray-500 mt-1">
                Appointments outside office hours available upon request. Just call!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
