import React from "react";
import { Download, FileText, Star, Briefcase, Code, Award, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration - more subtle */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-900 rounded-full mix-blend-overlay filter blur-xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-900 rounded-full mix-blend-overlay filter blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/50 shadow-lg mb-6">
            <FileText className="w-6 h-6 text-cyan-400" />
            <span className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Professional Resume</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            My Resume
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my professional journey and capabilities.
          </p>
        </div>

        {/* Main Resume Container */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Resume Preview */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
              {/* Header bar */}
              <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-white font-medium">resume.pdf</span>
                </div>
              </div>

              {/* PDF Preview */}
              <div className="relative">
                <iframe
                  src="/resume.pdf"
                  className="w-full h-[800px] border-0 bg-gray-900"
                  title="Dhruv's Resume"
                />
              </div>
            </div>
          </div>

          {/* Action Panel */}
          <div className="space-y-6">
            {/* Download Card */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-xl p-8 hover:border-cyan-500/30 transition-colors">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Download Resume</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Get a copy of my latest resume in PDF format.
                </p>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:from-cyan-600 hover:to-blue-700"
                >
                  <Download className="w-5 h-5" />
                  Download
                </a>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-cyan-400" />
                Key Highlights
              </h4>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-700/30 rounded-lg group hover:bg-gray-700/50 transition-colors">
                  <Briefcase className="w-6 h-6 text-cyan-400 mr-4" />
                  <div>
                    <div className="font-medium text-white">Vice President</div>
                    <div className="text-sm text-gray-400">Nexus VITC Club</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-700/30 rounded-lg group hover:bg-gray-700/50 transition-colors">
                  <Award className="w-6 h-6 text-cyan-400 mr-4" />
                  <div>
                    <div className="font-medium text-white">Runner-up Prize</div>
                    <div className="text-sm text-gray-400">Best Blueprint – GHC IIT Madras 2025</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-700/30 rounded-lg group hover:bg-gray-700/50 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-cyan-400 mr-4" />
                  <div>
                    <div className="font-medium text-white">Safety Systems Lead</div>
                    <div className="text-sm text-gray-400">DROMOS Hyperloop Team</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-700/30 rounded-lg group hover:bg-gray-700/50 transition-colors">
                  <Code className="w-6 h-6 text-cyan-400 mr-4" />
                  <div>
                    <div className="font-medium text-white">Chatbot Migration</div>
                    <div className="text-sm text-gray-400">61% faster data queries (PwC Intern)</div>
                  </div>
                </div>
              </div>
            </div>


            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl">
              <h4 className="text-lg font-bold mb-2">Want to connect?</h4>
              <p className="text-cyan-100 mb-4 text-sm">
                I'm open to new opportunities and collaborations.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}