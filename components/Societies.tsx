
import React from 'react';

const Societies: React.FC = () => {
  const clubs = [
    { name: "IEEE GTB4CEC", type: "Global Technical Society", color: "bg-blue-600", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png" },
    { name: "CSI Chapter", type: "Computer Society of India", color: "bg-orange-600", icon: "https://www.csi-india.org/Images/Logo.png" },
    { name: "SAE India", type: "Automotive Engineers", color: "bg-red-600", icon: "https://www.saeindia.org/images/logo.png" },
    { name: "Litterateurs", type: "The Literary Club", color: "bg-purple-600", icon: "https://cdn-icons-png.flaticon.com/512/3246/3246194.png" },
    { name: "Robotics Club", type: "Hardware & Innovation", color: "bg-green-600", icon: "https://cdn-icons-png.flaticon.com/512/3662/3662817.png" },
    { name: "Aavhan", type: "The Cultural Society", color: "bg-pink-600", icon: "https://cdn-icons-png.flaticon.com/512/4607/4607147.png" },
  ];

  return (
    <div className="py-20 bg-white border-y border-gray-100">
      <div className="text-center mb-20 max-w-2xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary tracking-tight">Active Student <span className="text-secondary underline decoration-primary/10">Societies</span></h2>
        <p className="text-gray-500 font-medium leading-relaxed">
          Join a community that shares your passion. From coding marathons to cultural extravaganzas, our societies offer a platform for every talent.
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clubs.map((club, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col items-center bg-gray-50 p-10 rounded-3xl border border-transparent hover:border-secondary hover:bg-white hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 ${club.color} opacity-5 -mr-12 -mt-12 rounded-full group-hover:scale-[10] transition-transform duration-700`}></div>
            
            <div className="w-20 h-20 mb-8 p-4 bg-white rounded-2xl shadow-lg relative z-10 group-hover:scale-110 transition-transform">
               <img src={club.icon} alt={club.name} className="w-full h-full object-contain" />
            </div>
            
            <div className="text-center relative z-10">
              <h3 className="text-xl font-black text-gray-800 mb-2 group-hover:text-primary transition-colors uppercase tracking-tight">{club.name}</h3>
              <p className="text-xs uppercase font-bold text-gray-400 tracking-widest">{club.type}</p>
            </div>
            
            <div className="mt-8 flex gap-2 relative z-10 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
               <span className="w-2 h-2 rounded-full bg-secondary"></span>
               <span className="w-2 h-2 rounded-full bg-secondary opacity-60"></span>
               <span className="w-2 h-2 rounded-full bg-secondary opacity-30"></span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
         <button className="bg-primary text-white font-bold px-10 py-4 rounded-full shadow-xl hover:bg-secondary hover:text-primary transition-all uppercase text-sm tracking-widest">
           View All Societies
         </button>
      </div>
    </div>
  );
};

export default Societies;
