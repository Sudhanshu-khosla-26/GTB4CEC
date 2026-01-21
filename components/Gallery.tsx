
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1523050335392-93851179ae22?auto=format&fit=crop&q=80&w=800", title: "Smart Learning Center", cat: "Infrastructure" },
    { src: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800", title: "Main Campus Facade", cat: "Campus" },
    { src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", title: "Technical Symposium 2024", cat: "Events" },
    { src: "https://images.unsplash.com/photo-1498243639359-2d1871e75ba0?auto=format&fit=crop&q=80&w=800", title: "Central Digital Library", cat: "Academic" },
    { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", title: "Robotics Research Cell", cat: "Innovation" },
    { src: "https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?auto=format&fit=crop&q=80&w=800", title: "Convocation Hall", cat: "Events" },
  ];

  return (
    <div className="py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-[#333] leading-tight uppercase">
              Panorama of <span className="font-bold text-primary font-serif italic">Campus Experience</span>
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-[0.5em] text-[10px] mt-6">A visual journey through GTB4CEC excellence</p>
          </div>
          <div className="flex gap-4">
             <button className="px-10 py-4 border border-gray-200 text-[#333] font-bold rounded-md text-[11px] uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all">Archives</button>
             <button className="px-10 py-4 bg-primary text-white font-bold rounded-md text-[11px] uppercase tracking-[0.2em] hover:shadow-xl transition-all">Virtual Tour</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-100">
          {images.map((img, i) => (
            <div key={i} className="group relative overflow-hidden bg-gray-100 aspect-[4/5] cursor-pointer border-r border-b border-gray-100 last:border-0">
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/95 flex flex-col items-center justify-center p-12 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <span className="text-white/40 font-black text-[10px] uppercase tracking-[0.5em] mb-4">{img.cat}</span>
                 <h3 className="text-white text-3xl font-bold tracking-tight mb-8 leading-tight">{img.title}</h3>
                 <div className="w-12 h-0.5 bg-white/20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
