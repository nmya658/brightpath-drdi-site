import { Eye } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-8 h-8 text-yellow-400" />
            <span className="text-2xl font-bold">
              Bright<span className="text-yellow-400">Path</span>
            </span>
          </div>

          <p className="text-blue-200 text-sm mb-4">
            Eye-Tracking and AI for Early Autism Detection
          </p>

          <div className="border-t border-blue-700 w-full max-w-2xl my-6"></div>

          <p className="text-blue-100 text-sm text-center">
            University of Dubai – BrightPath (EyeTism) © 2025
          </p>

          <p className="text-blue-300 text-xs mt-2">
            Funded by DRDI
          </p>
        </div>
      </div>
    </footer>
  );
}
