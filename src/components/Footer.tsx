import { Eye, Brain, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <Eye className="w-10 h-10 text-yellow-400 drop-shadow-lg" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-3xl font-bold">
                Bright<span className="text-yellow-400">Path</span>
              </span>
              <Brain className="w-10 h-10 text-yellow-400 drop-shadow-lg" />
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Eye-Tracking and AI for Early Autism Detection
            </p>
            <p className="text-blue-300 text-xs italic">
              Empowering early intervention through innovation
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-blue-200 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all duration-300"></span>
                  About the Project
                </a>
              </li>
              <li>
                <a href="#team" className="text-blue-200 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all duration-300"></span>
                  Our Team
                </a>
              </li>
              <li>
                <a href="#research" className="text-blue-200 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all duration-300"></span>
                  Research
                </a>
              </li>
              <li>
                <a href="#publications" className="text-blue-200 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all duration-300"></span>
                  Publications
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-blue-200 text-sm">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>University of Dubai<br />Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3 text-blue-200 text-sm">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href="mailto:info@brightpath.ae" className="hover:text-yellow-400 transition-colors duration-300">
                  info@brightpath.ae
                </a>
              </li>
              <li className="flex items-center gap-3 text-blue-200 text-sm">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href="tel:+971xxxxxxxxx" className="hover:text-yellow-400 transition-colors duration-300">
                  +971 XX XXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blue-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 px-4">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-blue-100 text-sm text-center">
              © 2025 University of Dubai – BrightPath (EyeTism)
            </p>
            <span className="hidden md:block text-blue-700">•</span>
            <p className="text-blue-300 text-xs">
              Funded by Dubai Future Foundation (DRDI)
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#privacy" className="text-blue-300 hover:text-yellow-400 text-xs transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-blue-700">•</span>
            <a href="#terms" className="text-blue-300 hover:text-yellow-400 text-xs transition-colors duration-300">
              Terms of Use
            </a>
          </div>
        </div>

        {/* Decorative element */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </footer>
  );
}