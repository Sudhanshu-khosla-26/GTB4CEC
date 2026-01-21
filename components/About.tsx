import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      <div className="lg:w-1/2 relative">
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary rounded-full -z-10 animate-pulse"></div>
        <img
          src="https://gtb4cec.org/assets/front/images/campus-information/College.jpg"
          alt="College Campus"
          className="rounded-3xl shadow-2xl object-cover w-full transform hover:scale-[1.02] transition-transform duration-500"
        />
        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
          <div className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl">
            25+
          </div>
          <div>
            <p className="font-bold text-gray-800">Years of Legacy</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              Education Excellence
            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 space-y-6">
        <h4 className="text-primary font-bold tracking-widest uppercase">
          The Genesis
        </h4>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Nurturing Minds Since <span className="text-secondary">Decades</span>
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Guru Tegh Bahadur 4th Centenary Engineering College is dedicated to
          providing quality engineering education inspired by the values of
          Sikhism and modern technological advancements. Affiliated with GGSIPU
          & Approved by AICTE, we've built a reputation for academic rigor and
          industrial relevance.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our vision is to be a globally recognized center of excellence in
          engineering and management, where we produce not just employees, but
          leaders and innovators of tomorrow.
        </p>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="border-l-4 border-primary pl-4">
            <h5 className="font-bold text-gray-800">Our Mission</h5>
            <p className="text-sm text-gray-500">
              To foster innovation and research mindset.
            </p>
          </div>
          <div className="border-l-4 border-secondary pl-4">
            <h5 className="font-bold text-gray-800">Our Values</h5>
            <p className="text-sm text-gray-500">
              Integrity, Excellence, and Inclusivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
