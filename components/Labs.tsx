
import React from 'react';

const Labs: React.FC = () => {
  const labData = [
    { name: "Advanced AI Lab", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", area: "1500 sqft" },
    { name: "IoT Innovation Lab", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800", area: "1200 sqft" },
    { name: "VLSI Design Lab", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", area: "1000 sqft" },
    { name: "Digital Fabrication", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800", area: "1800 sqft" },
    { name: "Computer Center", img: "https://images.unsplash.com/photo-1591712911637-bb12850c47af?auto=format&fit=crop&q=80&w=800", area: "2500 sqft" },
    { name: "Thermal Eng. Lab", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800", area: "2000 sqft" },
  ];

  return (
    <div className="bg-[#1A1A1A] p-12 rounded-[4rem] text-white border-8 border-secondary/5 shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
        <div>
          <h4 className="text-secondary font-black tracking-[0.4em] uppercase mb-4 text-xs">Innovation Hub</h4>
          <h2 className="text-5xl md:text-6xl font-bold leading-none">Industry Grade <br/><span className="text-secondary italic">Research Labs</span></h2>
        </div>
        <p className="max-w-md text-gray-400 border-l border-white/20 pl-8 leading-relaxed">
          Beyond textbooks, we empower our students with the best-in-class laboratory infrastructure, 
          mirroring the high-tech environments of global tech giants.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {labData.map((lab, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-[2rem] cursor-pointer aspect-square shadow-2xl">
             <img 
               src={lab.img} 
               alt={lab.name} 
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                <div className="w-12 h-1 bg-secondary mb-4"></div>
                <h3 className="text-2xl font-bold mb-1 tracking-tight">{lab.name}</h3>
                <p className="text-gray-300 text-sm font-medium uppercase tracking-widest">{lab.area} Capacity</p>
                <div className="h-0 group-hover:h-12 transition-all overflow-hidden opacity-0 group-hover:opacity-100 mt-4">
                   <button className="px-6 py-2 bg-secondary text-primary font-bold rounded-full text-xs uppercase">View All Assets</button>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Labs;
