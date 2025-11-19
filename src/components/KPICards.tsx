import { Users, Target, Zap, FileText } from 'lucide-react';

const kpis = [
  {
    icon: Users,
    label: 'Participants',
    value: '59',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Target,
    label: 'Model Accuracy',
    value: '0.84',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Zap,
    label: 'Latency',
    value: '<2s',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: FileText,
    label: 'Papers Published',
    value: '2',
    color: 'bg-yellow-50 text-yellow-600',
  },
];

export default function KPICards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`w-12 h-12 ${kpi.color} rounded-lg flex items-center justify-center mb-4`}>
                <kpi.icon className="w-6 h-6" />
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">{kpi.label}</p>
              <p className="text-3xl font-bold text-gray-900">{kpi.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
