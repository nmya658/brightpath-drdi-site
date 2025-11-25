import { Eye, Brain } from 'lucide-react';
import udLogo from './logo.png';
import drdiLogo from './DRDI.webp';
import ehsLogo from './EHS.png';
// International Collaborators - replace with actual logo files later
import uowLogo from './conferencephotos/uow-logo.png'; // University of Wollongong
import unswLogo from './conferencephotos/unsw-logo.png'; // University of New South Wales
import mqLogo from './conferencephotos/mq-logo.png'; // Macquarie University

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden min-h-screen flex items-center">
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20">
          <source src="https://cdn.pixabay.com/video/2023/05/04/160722-823830283_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
      </div>

      {/* Background accents */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        
        {/* Title with animation */}
        <div className="flex items-center justify-center mb-10 animate-fade-in">
          <div className="flex items-center gap-6">
            <Eye className="w-16 h-16 text-yellow-400 drop-shadow-lg" />
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight">
              Bright<span className="text-yellow-400">Path</span>
            </h1>
            <Brain className="w-16 h-16 text-yellow-400 drop-shadow-lg" />
          </div>
        </div>

        <p className="text-center text-2xl sm:text-3xl text-blue-50 mb-16 max-w-4xl mx-auto font-light tracking-wide">
          Eye-Tracking and AI for Early Autism Detection
        </p>

        {/* University + Partners with improved layout */}
        <div className="flex flex-col items-center gap-16 mb-16">

          {/* UD Logo - Featured prominently */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="px-10 py-6 bg-white rounded-2xl shadow-2xl flex items-center justify-center border-4 border-blue-200">
              <img src={udLogo} alt="University of Dubai" className="h-20 object-contain" />
            </div>
          </div>

          {/* DRDI + EHS logos - Side by side with equal prominence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">

            {/* DRDI */}
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-full transform group-hover:scale-105 transition-transform duration-300">
                <div className="px-8 py-6 bg-white rounded-2xl shadow-xl flex items-center justify-center h-28">
                  <img src={drdiLogo} alt="Dubai Future Foundation" className="max-h-16 w-auto object-contain" />
                </div>
              </div>
              <span className="text-base font-medium text-blue-50 text-center leading-relaxed">
                Funded by Dubai Future Foundation
              </span>
            </div>

            {/* EHS */}
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-full transform group-hover:scale-105 transition-transform duration-300">
                <div className="px-8 py-6 bg-white rounded-2xl shadow-xl flex items-center justify-center h-28">
                  <img src={ehsLogo} alt="Emirates Health Services" className="max-h-16 w-auto object-contain" />
                </div>
              </div>
              <span className="text-base font-medium text-blue-50 text-center leading-relaxed">
                Partner with Emirates Health Services
              </span>
            </div>

          </div>
        </div>

        {/* International Collaborators Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-50">
            International Collaborators
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* University of Wollongong */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="px-6 py-5 bg-white rounded-xl shadow-xl flex items-center justify-center h-24">
                <img 
                  src={uowLogo} 
                  alt="University of Wollongong" 
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            </div>

            {/* University of New South Wales */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="px-6 py-5 bg-white rounded-xl shadow-xl flex items-center justify-center h-24">
                <img 
                  src={unswLogo} 
                  alt="University of New South Wales" 
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            </div>

            {/* Macquarie University */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="px-6 py-5 bg-white rounded-xl shadow-xl flex items-center justify-center h-24">
                <img 
                  src={mqLogo} 
                  alt="Macquarie University" 
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Description with better typography */}
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg sm:text-xl text-blue-50 leading-relaxed font-light">
            Pioneering research combining advanced eye-tracking technology with artificial intelligence
            to enable early detection of Autism Spectrum Disorder, empowering families and clinicians
            with accessible, data-driven diagnostic tools.
          </p>
        </div>
      </div>
    </section>
  );
}