import { FileText, Download } from 'lucide-react';

const documents = [
  {
    title: 'Project One-Pager',
    description: 'Executive summary and key highlights',
    size: '2.4 MB',
  },
  {
    title: 'Progress Report',
    description: 'Detailed quarterly progress update',
    size: '5.1 MB',
  },
  {
    title: 'Ethics Note',
    description: 'Ethical considerations and compliance',
    size: '1.8 MB',
  },
];

export default function Downloads() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Downloads
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Access project documentation and reports
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <button className="p-2 rounded-lg bg-gray-50 text-gray-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Download className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
              <span className="text-xs text-gray-500">{doc.size}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
