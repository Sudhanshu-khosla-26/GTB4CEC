
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center font-bold text-xl">GTB</div>
              <h2 className="text-2xl font-bold tracking-tighter">GTB4CEC</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Established with a vision to deliver world-class technical education. 
              We are a premier institute shaping the future of global engineering.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map(platform => (
                <a key={platform} href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                  <span className="sr-only">{platform}</span>
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-secondary transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Exam Schedule</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Placement Cell</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Student Portal Login</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Library Catalog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Portals</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-secondary transition-colors">Faculty Login</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Alumni Network</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Grievance Redressal</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Anti-Ragging Cell</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">GGSIPU Affiliation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Newsletter</h3>
            <p className="text-gray-400 mb-6 text-sm">Subscribe to get latest updates on campus events and news.</p>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Your email address" className="bg-gray-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary transition-all" />
              <button className="bg-secondary text-primary font-bold py-3 rounded-xl hover:bg-white transition-colors">Subscribe Now</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p>© 2024 Guru Tegh Bahadur 4th Centenary Engineering College. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
