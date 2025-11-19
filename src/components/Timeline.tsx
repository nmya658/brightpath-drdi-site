import { CheckCircle2, Circle } from 'lucide-react';

const milestones = [
  {
    date: 'Sep 2024',
    title: 'Project Kickoff',
    description: 'Initiated research collaboration and formed core team',
    completed: true,
  },
  {
    date: 'Dec 2024',
    title: 'Prototype v1',
    description: 'First working model with eye-tracking integration',
    completed: true,
  },
  {
    date: 'Mar 2025',
    title: 'Agentic Pipeline',
    description: 'Deployed n8n automation for end-to-end workflows',
    completed: true,
  },
  {
    date: 'Jun 2025',
    title: 'Flutter Integration',
    description: 'Mobile app with real-time prediction capabilities',
    completed: false,
  },
  {
    date: 'Sep 2025',
    title: 'Platform Demo',
    description: 'Full system demonstration and public release',
    completed: false,
  },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Project Timeline
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-yellow-400 to-gray-300"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex gap-6">
                <div className="flex-shrink-0">
                  {milestone.completed ? (
                    <CheckCircle2 className="w-16 h-16 text-blue-600 bg-white rounded-full" />
                  ) : (
                    <Circle className="w-16 h-16 text-gray-300 bg-white rounded-full p-2" />
                  )}
                </div>

                <div className="flex-1 pb-8">
                  <div className={`bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md ${
                    milestone.completed ? 'border-l-4 border-blue-600' : 'border-l-4 border-gray-200'
                  }`}>
                    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-2 ${
                      milestone.completed
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {milestone.date}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
