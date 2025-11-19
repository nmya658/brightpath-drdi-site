import { Smartphone, Eye, Code, BarChart3 } from 'lucide-react';

const demos = [
  {
    icon: Smartphone,
    title: 'Flutter App Predict',
    description: 'Try the mobile prediction interface',
    link: '#',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: Eye,
    title: 'RealEye Test',
    description: 'Experience eye-tracking calibration',
    link: '#',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Code,
    title: 'ASD Model API',
    description: 'Access the prediction API',
    link: '#',
    color: 'from-blue-700 to-blue-800',
  },
  {
    icon: BarChart3,
    title: 'Cumulocity Dashboard',
    description: 'View real-time analytics',
    link: '#',
    color: 'from-yellow-600 to-yellow-700',
  },
];

export default function LiveDemos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Live Demos
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our platform capabilities through interactive demonstrations
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((demo, index) => (
            <a
              key={index}
              href={demo.link}
              className="group relative bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <demo.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">
                  {demo.title}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-blue-50 transition-colors duration-300">
                  {demo.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
