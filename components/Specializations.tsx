
import React from 'react';

const Specializations: React.FC = () => {
  const specs = [
    { 
      title: "Computer Science and Engineering", 
      icon: "💻", 
      desc: "Focusing on algorithmic thinking, high-level programming, and software architecture."
    },
    { 
      title: "Information Technology", 
      icon: "🌐", 
      desc: "Mastering cloud computing, cyber security, and data science frameworks."
    },
    { 
      title: "Electronics & Comm. Engineering", 
      icon: "📡", 
      desc: "Deep dive into embedded systems, wireless networks, and micro-electronics."
    },
    { 
      title: "Mechanical Engineering", 
      icon: "⚙️", 
      desc: "Engineering the next generation of robotics, sustainable energy, and manufacturing."
    }
  ];

  return (
    <div className="py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl mb-24">
           <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-primary"></div>
              <h4 className="text-primary font-black uppercase text-xs tracking-widest">Departments</h4>
           </div>
           <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[#333] leading-tight">
             Fostering Innovation in <span className="font-bold italic text-primary font-serif">Core Engineering</span>
           </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {specs.map((spec, idx) => (
            <div key={idx} className="group relative flex flex-col border-b border-gray-100 pb-12 transition-all">
              <div className="text-5xl mb-10 group-hover:scale-110 transition-transform origin-left grayscale group-hover:grayscale-0">
                {spec.icon}
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight text-[#333] mb-4 group-hover:text-primary transition-colors">
                {spec.title}
              </h3>
              <p className="text-[13px] text-gray-500 font-medium leading-relaxed mb-8">
                {spec.desc}
              </p>
              <div className="mt-auto flex items-center gap-3">
                 <button className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-primary transition-all">Explore Curriculum</button>
                 <div className="w-6 h-[1px] bg-gray-200 group-hover:w-12 group-hover:bg-primary transition-all"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specializations;
