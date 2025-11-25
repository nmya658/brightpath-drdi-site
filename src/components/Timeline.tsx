import { CheckCircle2, Circle } from 'lucide-react';
const milestones = [
  // ------- Completed / Achieved -------
  {
    date: 'Jul 2024',
    title: 'Idea Formation & Preliminary Work',
    description:
      'Defined the research problem, reviewed state-of-the-art ASD eye-tracking studies, and ran preliminary signal and scanpath analysis to scope the project.',
    completed: true,
  },
  {
    date: 'Sep 2024',
    title: 'Submission to RDI Grant',
    description:
      'Prepared and submitted the full RDI proposal, including technical work packages, timelines, and ethical considerations for home-based ASD screening.',
    completed: true,
  },
  {
    date: 'Jan 2025',
    title: 'RDI Grant Acceptance',
    description:
      'RDI proposal officially approved, securing funding for AI model development, mobile app implementation, and clinical validation.',
    completed: true,
  },
  {
    date: 'Mar 2025',
    title: 'Project Launch',
    description:
      'Formal project kick-off; finalized governance structure, roles, and communication channels between technical, clinical, and institutional partners.',
    completed: true,
  },
  {
    date: 'May 2025',
    title: 'Recruitment of Research Assistant',
    description:
      'Hired a full-time RA to support data engineering, model development, and coordination of clinical and ethical documentation.',
    completed: true,
  },
  {
    date: 'Jun 2025',
    title: 'Development of Agentic AI Workflow',
    description:
      'Designed and deployed the n8n-based agentic AI pipeline integrating RealEye exports, feature extraction, ASD prediction, and OpenAI-powered feedback.',
    completed: true,
  },
  {
    date: 'Jul 2025',
    title: 'Mobile Application Prototype',
    description:
      'Delivered the first Flutter-based mobile app prototype with user onboarding, test scheduling, and integration hooks for the AI backend.',
    completed: true,
  },
  {
    date: 'Jul 2025',
    title: 'AI Models for Autism Screening',
    description:
      'Implemented and benchmarked multiple ML/DL models (e.g., SVM, hybrid ensembles, CNN/LSTM) for ASD vs TD classification using eye-tracking datasets.',
    completed: true,
  },
  {
    date: 'May - Nov 2025',
    title: 'Ethical & Clinical Approvals',
    description:
      'Submitted ethics applications and initiated clinical approval workflows with relevant committees, aligning protocol with data privacy and pediatric safety requirements.',
    completed: true,
  },

  // ------- Planned / Upcoming -------
  {
    date: 'Nov 2025 – Ongoing',
    title: 'Data Collection',
    description:
      'Begin prospective data collection using the RealEye-based setup and mobile app, capturing eye-tracking signals and questionnaire responses from ASD and TD children.',
    completed: false,
  },
  {
    date: 'Jan 2026',
    title: 'Validation of Collected Data',
    description:
      'Perform data cleaning, quality checks, inter-session consistency analysis, and initial statistical validation of gaze features and clinical labels.',
    completed: false,
  },
  {
    date: 'Feb 2026',
    title: 'RealEye–AI Integration for Real-Time Prediction',
    description:
      'Integrate RealEye streaming outputs with the AI inference backend to enable near real-time ASD risk scores, including latency benchmarking and load testing.',
    completed: false,
  },
  {
    date: 'May 2026',
    title: 'Production-Ready Mobile Application',
    description:
      'Harden the Flutter app for production with secure authentication, role-based access, encrypted data sync, and deployment to app stores / institutional environments.',
    completed: false,
  },
  {
    date: 'Jul 2026',
    title: 'Submission of Two Journal Papers',
    description:
      'Prepare and submit two high-impact journal manuscripts covering the agentic AI workflow and the AI-driven ASD screening framework.',
    completed: false,
  },
  {
    date: 'Oct 2026',
    title: 'Development of LLM Model for Personalized Feedback',
    description:
      'Train and fine-tune a domain-specific LLM to generate child-specific, context-aware reports and recommendations for parents and clinicians.',
    completed: false,
  },
  {
    date: 'Dec 2026',
    title: 'Dataset Expansion',
    description:
      'Scale the dataset with additional participants and sessions across different age groups and diverse screening environments.',
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
