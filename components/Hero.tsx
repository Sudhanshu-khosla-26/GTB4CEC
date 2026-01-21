import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover filter brightness-[0.4]"
      >
        <source
          src="https://res.cloudinary.com/sudhanshu123/video/upload/v1769022106/hero_axfir8.mp4"
          type="video/mp4"
        />
      </video>

      {/* Hero Text Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-12 lg:px-24 text-left">
        <div className="animate-reveal space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-10 md:h-16 bg-gradient-to-b from-primary to-secondary"></div>
            <h2 className="text-white font-black text-3xl md:text-5xl lg:text-7xl tracking-tighter uppercase leading-tight">
              WELCOME TO <br />
              <span className="text-secondary drop-shadow-2xl">GTB4CEC</span>
            </h2>
          </div>

          <div className="max-w-2xl space-y-8">
            <div className="flex items-center gap-4 text-secondary">
              <div className="h-[2px] w-12 md:w-20 bg-secondary"></div>
              <p className="font-black uppercase text-xs md:text-sm tracking-[0.3em]">
                Build Your Future
              </p>
            </div>

            <p className="text-base md:text-xl lg:text-2xl text-white/90 font-medium leading-relaxed font-serif italic">
              "Learn, Laugh & Grow Together"
            </p>

            <p className="text-sm md:text-lg text-white/70 font-medium leading-relaxed max-w-xl">
              Established in 1999, Guru Tegh Bahadur 4th Centenary Engineering
              College is a premier institute for engineering excellence in the
              heart of New Delhi.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary text-white font-black px-6 md:px-10 py-4 rounded-md uppercase text-[10px] md:text-xs tracking-widest shadow-2xl hover:bg-secondary hover:text-primary transition-all active:scale-95">
                Admission 2026
              </button>
              <button className="bg-white/5 backdrop-blur-md border border-white/20 text-white font-black px-6 md:px-10 py-4 rounded-md uppercase text-[10px] md:text-xs tracking-widest hover:bg-white hover:text-primary transition-all active:scale-95">
                Virtual Campus Tour
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker/Info Strip */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-primary/95 backdrop-blur-sm py-2 md:py-4 overflow-hidden border-t-4 border-secondary">
        <div className="flex whitespace-nowrap animate-notice-slide gap-12 md:gap-24">
          <span className="text-white text-[9px] md:text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
            <span className="text-secondary">●</span> Admissions Open for CSE,
            IT, ECE & MAE (Batch 2024)
          </span>
          <span className="text-white text-[9px] md:text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
            <span className="text-secondary">●</span> Top Tech Recruiters:
            Microsoft, Amazon, Google, TCS
          </span>
          <span className="text-white text-[9px] md:text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
            <span className="text-secondary">●</span> Approved by AICTE &
            Affiliated to GGSIPU
          </span>
          <span className="text-white text-[9px] md:text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
            <span className="text-secondary">●</span> Scholarship Available for
            Meritorious Students
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
