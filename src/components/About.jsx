import React from "react";
import { Briefcase, Coffee,Code,  CoffeeIcon, Music, BicepsFlexedIcon, Gamepad2 } from "lucide-react";
import { self_description } from "../../variables";
import { experience } from "../../variables";
export default function About() {
  return (
    <section id="about" className="py-24 px-8 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            Get to know the person behind the code
          </p>
        </div>

        {/* About Me */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 flex items-center">
            <Code className="w-8 h-8 mr-3 text-cyan-400" />
            Who I Am
          </h3>
          {self_description.map((item, index) => (
            <p key={index} className="text-gray-300 leading-relaxed mb-4">
              {item.text}
            </p>
          ))}
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-cyan-400" />
            Experience
          </h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="pl-10 relative">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-cyan-500/20 border-2 border-cyan-400"></div>
                <div className="absolute left-3 top-7 bottom-0 w-0.5 bg-gray-700"></div>
                <h4 className="text-xl font-medium">{exp.role}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 mb-2">
                  <span className="mr-4">{exp.company}</span>
                  <span className="text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 flex items-center">
            <BicepsFlexedIcon className="w-8 h-8 mr-3 text-cyan-400" />
            Beyond Coding
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: <Gamepad2 className="w-6 h-6" />, name: "Gaming" },
              { icon: <Music className="w-6 h-6" />, name: "Playing the Guitar" },
              { icon: <CoffeeIcon className="w-6 h-6" />, name: "Caffeine!" },
            ].map((hobby, index) => (
              <div key={index} className="flex justify-center items-center flex-col bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 hover:border-cyan-400/30 transition-colors">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-3 text-cyan-400">
                  {hobby.icon}
                </div>
                <h4 className="font-medium">{hobby.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}