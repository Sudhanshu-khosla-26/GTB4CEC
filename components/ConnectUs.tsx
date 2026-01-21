
import React from 'react';

const ConnectUs: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
      {/* Contact Form */}
      <div className="lg:w-1/2 p-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-primary mb-8">Connect With Us</h2>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
              <option>Admission Inquiry</option>
              <option>Placement Cell</option>
              <option>Fee Payment Issues</option>
              <option>Others</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
            <textarea rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
          </div>
          <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl active:scale-[0.98] transition-all">
            Send Message
          </button>
        </form>
      </div>

      {/* Map and Address */}
      <div className="lg:w-1/2 relative min-h-[400px]">
        {/* Actual College Location (Approximate coords for demonstration) */}
        <iframe 
          title="Campus Map"
          className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.077239332612!2d77.10654067623696!3d28.65739817565111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d037000000001%3A0x6b9762193b0a701!2sGuru%20Tegh%20Bahadur%204th%20Centenary%20Engineering%20College!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        {/* Overlay Info Card */}
        <div className="absolute top-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-l-8 border-secondary">
           <h3 className="font-bold text-primary mb-2 italic">Visit Us</h3>
           <p className="text-gray-700 text-sm">G-8 Area, Rajouri Garden, New Delhi, Delhi 110064</p>
           <div className="mt-4 flex gap-4 text-xs font-bold text-gray-500">
              <span className="flex items-center gap-1"><span className="text-secondary">●</span> 011-25120002</span>
              <span className="flex items-center gap-1"><span className="text-secondary">●</span> gtb4cec@gmail.com</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectUs;
