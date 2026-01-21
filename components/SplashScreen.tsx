import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[200]">
      <div className="flex flex-col items-center animate-reveal">
        {/* Institutional Graduation Icon */}
        <div className="w-24 h-24 md:w-28 md:h-28 mb-8">
          <svg viewBox="0 0 24 24" fill="none" stroke="#5C020C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 002-2v-5" />
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
          </svg>
        </div>
        
        <h1 className="text-xl md:text-3xl font-bold text-primary tracking-tight text-center max-w-md px-4 leading-snug">
          Guru Tegh Bahadur <br />
          4th Centenary Engineering College
        </h1>
        
        <p className="text-xs md:text-sm font-bold text-gray-400 mt-4 uppercase tracking-[0.3em]">
          Institutional Excellence
        </p>
        
        {/* Loading Indicator */}
        <div className="mt-16 flex gap-3">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>
      </div>

      <div className="absolute bottom-10 w-full px-10 flex flex-col md:flex-row justify-center items-center gap-4">
        <button className="text-[10px] uppercase tracking-widest font-black text-gray-500 border border-gray-100 px-6 py-3 rounded-full hover:bg-gray-50 transition-all shadow-sm">
          Campus Portal
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;