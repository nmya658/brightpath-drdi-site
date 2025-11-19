import { useState } from 'react';
import { BookOpen, Briefcase, ExternalLink, Smartphone, Brain, Workflow } from 'lucide-react';

const academicData = [
  {
    type: 'Conference',
    title: 'Home-Based Autism Screening through Agentic AI: A Scalable Framework for Empowering Families',
    status: 'Accepted',
  },
  {
    type: 'Conference',
    title: 'Hybrid Vision Transformer-Mamba Framework for Autism Diagnosis via Eye-Tracking Analysis',
    status: 'Accepted',
  },
  {
    type: 'Conference',
    title: 'Exploring Image Transforms derived from Eye Gaze Variables for Progressive Autism Diagnosis',
    status: 'Accepted',
  },
  {
    type: 'Conference',
    title: 'AIoT-Based Early Autism Screening Using Agentic AI and Workflow Automation',
    status: 'Accepted',
  },
  {
    type: 'Conference',
    title: 'Empowering Convenient Home-based Progressive Autism Diagnosis and Management System through Agentic AI-powered Assistive Technology',
    status: 'Accepted',
  },
  {
    type: 'Conference',
    title: 'Fusion of Handcrafted and LSTM-Derived Features for Robust ASD Classification from Eye-Tracking Data',
    status: 'Accepted',
  },
  {
    type: 'Conference',
    title: 'The Gaze of AI: Revolutionizing Early Autism Screening with Home-Based Eye Tracking',
    status: 'Accepted',
  },
  {
    type: 'Journal',
    title: 'Hybrid Ensemble Learning for Autism Spectrum Disorder Screening Using Scanpath Features and Eye-Tracking Data',
    status: 'Submitted',
  },
  {
    type: 'Review Paper',
    title: 'Home-Based Eye tracking for Early Autism Screening: A Narrative Review of Approaches, Evidence, and Implementation Challenges',
    status: 'Submitted',
  },
];

const awardsData = [
  {
    title: '3rd Place - EHS Conference',
    achievement: 'Home-Based Autism Screening through Agentic AI: A Scalable Framework for Empowering Families',
    description: 'Recognized for innovative approach to accessible autism screening using agentic AI technology',
  },
];

const industrialData = [
  {
    icon: ExternalLink,
    title: 'RealEye Eye-Tracking Platform',
    description: 'Advanced eye-tracking software used to capture and analyze eye movements of children during screening assessments.',
    link: 'https://www.realeye.io/',
    linkText: 'Visit RealEye',
    features: ['Calibration-free tracking', 'Webcam-based solution', 'Real-time data capture']
  },
  {
    icon: ExternalLink,
    title: 'Parent Questionnaire System',
    description: 'Comprehensive questionnaire designed for parents to provide behavioral and developmental information about their children.',
    link: '#questionnaire',
    linkText: 'Access Questionnaire',
    features: ['Standardized questions', 'Easy-to-use interface', 'Secure data collection']
  },
  {
    icon: Smartphone,
    title: 'Mobile Application',
    description: 'Cross-platform mobile app enabling parents to access RealEye tests and questionnaires conveniently from their devices.',
    link: null,
    linkText: null,
    features: ['iOS & Android support', 'Integrated RealEye access', 'Built-in questionnaire', 'User-friendly interface']
  },
  {
    icon: Brain,
    title: 'AI Screening Model',
    description: 'Advanced machine learning model trained on publicly available datasets to detect and screen children for autism spectrum disorder.',
    link: null,
    linkText: null,
    features: ['High accuracy detection', 'Multi-dataset training', 'Real-time screening', 'Robust classification']
  },
  {
    icon: Workflow,
    title: 'End-to-End Agentic AI Workflow',
    description: 'Complete automated workflow orchestrating the entire screening process from initial assessment to final diagnosis support.',
    link: null,
    linkText: null,
    features: ['Automated data processing', 'n8n workflow automation', 'IoT integration', 'Real-time analytics', 'Seamless pipeline']
  },
];

export default function Achievements() {
  const [activeTab, setActiveTab] = useState<'publications' | 'awards' | 'industrial'>('publications');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Achievements
        </h2>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('publications')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'publications'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              Publications
            </button>
            <button
              onClick={() => setActiveTab('awards')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'awards'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="text-xl">🏆</span>
              Awards
            </button>
            <button
              onClick={() => setActiveTab('industrial')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'industrial'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              Industrial
            </button>
          </div>
        </div>

        <div className="transition-all duration-500">
          {activeTab === 'publications' ? (
            <div className="grid gap-6 max-w-4xl mx-auto">
              {academicData.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
                      {item.type}
                    </span>
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      item.status === 'Accepted' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
              ))}
            </div>
          ) : activeTab === 'awards' ? (
            <div className="grid gap-6 max-w-4xl mx-auto">
              {awardsData.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-yellow-50 to-white border-2 border-yellow-300 rounded-xl p-8 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🏆</span>
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">{item.achievement}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-8 max-w-5xl mx-auto">
              {industrialData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.features.map((feature, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                          >
                            {item.linkText}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}