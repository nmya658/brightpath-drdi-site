import { useState } from 'react';
import {
  BookOpen,
  Briefcase,
  ExternalLink,
  Smartphone,
  Brain,
  Workflow,
  ChevronDown,
} from 'lucide-react';
import conf20241 from './conferencephotos/20241.jpeg';
import conf20242 from './conferencephotos/20242.jpeg';
import conf20243 from './conferencephotos/20243.jpeg';
import conf20251 from './conferencephotos/20251.jpeg';
import conf20252 from './conferencephotos/20252.jpeg';
import conf20253 from './conferencephotos/20253.jpeg';
type AcademicItem = {
  type: string;
  title: string;
  status: 'Accepted' | 'Submitted';
  conference?: string;
  date?: string;
  abstract?: string;
};

type AwardItem = {
  title: string;
  achievement: string;
  description: string;
  date: string;
  images: string[];
};

const academicData: AcademicItem[] = [
  {
    type: 'Abstract',
    title: 'Home-Based Autism Screening through Agentic AI: A Scalable Framework for Empowering Families',
    status: 'Accepted',
    conference: 'Emirates Health Service 2025 Conference',
    date: 'October 2025',
    abstract:
      'Autism Spectrum Disorder (ASD) diagnosis remains dependent on resource-intensive clinical evaluations, often delaying early intervention and creating access barriers for families. This work introduces a novel, home-based ASD screening framework that leverages webcam eye-tracking, workflow automation, and agentic artificial intelligence (AI) to deliver scalable, personalized, and context-aware mental health support, all while enabling families to monitor and assess ASD risk in the comfort and familiarity of their own homes, thereby minimizing the stress and anxiety often associated with clinic visits and in-person assessments. The system integrates RealEye.io for gaze data capture through standard webcams while children view curated visual stimuli, a user-friendly mobile application for convenient at-home assessment, and an automated n8n pipeline that orchestrates data flow between the app and backend services for feature extraction and hybrid ensemble machine learning classification to distinguish between ASD and Typically Developing (TD) patterns. The proposed model achieved an average accuracy of 96.7\\% using stratified 5-fold cross-validation, demonstrating robustness and real-time responsiveness. To enhance caregiver engagement, an agentic AI layer powered by OpenAI interprets the classification output, accesses user history, and generates personalized feedback for each user. End-to-end testing showed the system can deliver classification and feedback in under 8 seconds, with median inference latency below 0.3 seconds. By combining AIoT technologies with agentic intelligence and mobile accessibility, this framework bridges clinical research and real-world deployment, enabling early, proactive ASD screening and providing sustainable, family-centered mental health support directly at home.',
  },
  {
    type: 'Abstract',
    title:
      'The Gaze of AI: Revolutionizing Early Autism Screening with Home-Based Eye Tracking',
    status: 'Accepted',
    conference: 'Emirates Health Service 2025 Conference',
    date: 'October 2025',
    abstract:
      'Autism Spectrum Disorder (ASD) is defined as a developmental disorder with prevalence rate of approximately 1 in 31 by 2025, characterised by problems with social interaction, communication accompanied by restrictive interests and repetitive behaviors. While the condition necessitates early identification for earliest interventions and developmental outcomes, traditional diagnostic tools and methods are often subjective, delayed and non-systematic. This narrative review explores eye tracking as an objective tool for autism screening focusing on its home-based deployment as a promising strategy for early ASD screening. Methods: A comprehensive literature search was conducted using PubMed and Scopus databases, covering publications from 2015 to 2025. The search focused on identifying studies relevant to the use of eye tracking as a digital biomarker for early autism spectrum disorder (ASD) screening. Results: Eye tracking quantifies atypical gaze patterns, such as reduced attention to social stimuli and increased focus to non-social objects giving an objective measure of the disease that usually manifests as early as 6 months in ASD children. The review included 75 unique relevant studies focusing on eye tracking in both clinical and home setting highlighting the major evolving changes happening to the technique. Utilizing the evolving technologies of eye tracking as a technique and enabling remote, webcam-based setting offers enhanced accessibility, ecological validity and cost-effectiveness. This is further enabled and translated into diagnostic tools by the integration of machine learning and artificial intelligence as essentials in automating the analysis of complex eye-gaze data. By integrating diverse eye gaze metrics and leveraging AI, home-based eye tracking holds profound potential to revolutionize early ASD diagnosis, providing more equitable and timely interventions that can significantly improve long-term outcomes for affected children. Conclusions: By synthesizing current evidence and outlining key considerations, this review seeks to inform researchers, clinicians, and policymakers about the opportunities and challenges of leveraging home-based eye tracking in the early identification of ASD.',
  },
  {
    type: 'Conference',
    title: 'Hybrid Vision Transformer-Mamba Framework for Autism Diagnosis via Eye-Tracking Analysis',
    status: 'Accepted',
    conference:
      '2025 International Conference on Communication, Computing, Networking, and Control in Cyber-Physical Systems (CCNCPS)',
    date: 'July 2025',
    abstract:
      'Accurate ASD diagnosis is vital for early intervention. This study presents a hybrid deep learning framework combining Vision Transformers (ViT) and Vision Mamba to detect Autism Spectrum Disorder (ASD) using eye-tracking data. The model uses attention-based fusion to integrate visual, speech, and facial cues, capturing both spatial and temporal dynamics. Unlike traditional handcrafted methods, it applies state-of-the-art deep learning and explainable AI techniques to enhance diagnostic accuracy and transparency. Tested on the Saliency4ASD dataset, the proposed ViT-Mamba model outperformed existing methods, achieving 0.96 accuracy, 0.95 F1-score, 0.97 sensitivity, and 0.94 specificity. These findings show the model’s promise for scalable, interpretable ASD screening, especially in resource-constrained or remote clinical settings where access to expert diagnosis is limited.',
  },
  {
    type: 'Conference',
    title: 'Exploring Image Transforms derived from Eye Gaze Variables for Progressive Autism Diagnosis',
    status: 'Accepted',
    conference:
      '2025 International Conference on Control, Automation and Diagnosis (ICCAD)',
    date: 'July 2025',
    abstract:
      'The prevalence of Autism Spectrum Disorder (ASD) has surged rapidly over the past decade, posing significant challenges in communication, behavior, and focus for affected individuals. Current diagnostic techniques, though effective, are time-intensive, leading to high social and economic costs. This work introduces an AI-powered assistive technology designed to streamline ASD diagnosis and management, enhancing convenience for individuals with ASD and efficiency for caregivers and therapists. The system integrates transfer learning with image transforms derived from eye gaze variables to diagnose ASD. This facilitates and opens opportunities for in-home periodical diagnosis, reducing stress for individuals and caregivers, while also preserving user privacy through the use of image transforms. The accessibility of the proposed method also offers opportunities for improved communication between guardians and therapists, ensuring regular updates on progress and evolving support needs. Overall, the approach proposed in this work ensures timely, accessible diagnosis while protecting the subjects’ privacy, improving outcomes for individuals with ASD.',
  },
  {
    type: 'Conference',
    title: 'AIoT-Based Early Autism Screening Using Agentic AI and Workflow Automation',
    status: 'Accepted',
    conference:
      'IEEE Annual Congress on Artificial Intelligence of Things (IEEE AIoT) 2025',
    date: '3–5 December 2025',
    abstract:
      'Early detection of Autism Spectrum Disorder (ASD) is crucial for enabling timely interventions that improve developmental outcomes. However, traditional diagnostic methods are often subjective, resource-intensive, and inaccessible for remote or underserved populations. This paper presents a novel AIoT-based framework for the early detection of ASD in children through real-time eye-tracking and intelligent automation. Leveraging webcam-based platforms like RealEye.io for non-invasive gaze capture, our system processes visual attention data to identify behavioral markers indicative of ASD. A lightweight Multilayer Perceptron (MLP) classifier analyzes extracted features, while an automated pipeline built in n8n coordinates data flow, prediction, and feedback generation. The final output is contextualized through an Agentic AI layer powered by OpenAI, which tailors natural language responses based on user history. Experimental evaluations demonstrate strong classification performance, with the MLP achieving an average accuracy of 86.3%. The system\'s end-to-end latency remains within practical limits, validating its suitability for home-based, scalable ASD screening. This work bridges the gap between clinical research and real-world deployment by integrating AI, IoT, and automation into a cohesive and interpretable pipeline.',
  },
  {
    type: 'Conference',
    title:
      'Empowering Convenient Home-based Progressive Autism Diagnosis and Management System through Agentic AI-powered Assistive Technology',
    status: 'Accepted',
    conference:
      'IEEE International Conference on E-health Networking, Application & Services',
    date: '21–23 October 2025',
    abstract:
      'Autism Spectrum Disorder (ASD) diagnosis remains dependent on resource-intensive clinical evaluations, often delaying early intervention and creating access barriers for families. This work introduces a novel, home-based ASD screening framework that leverages webcam eye-tracking, workflow automation, and agentic artificial intelligence (AI) to deliver scalable, personalized, and context-aware mental health support, all while enabling families to monitor and assess ASD risk in the comfort and familiarity of their own homes, thereby minimizing the stress and anxiety often associated with clinic visits and in-person assessments. The system integrates RealEye.io for gaze data capture through standard webcams while children view curated visual stimuli, a user-friendly mobile application for convenient at-home assessment, and an automated n8n pipeline that orchestrates data flow between the app and backend services for feature extraction and hybrid ensemble machine learning classification to distinguish between ASD and Typically Developing (TD) patterns. The proposed model achieved an average accuracy of 96.7% using stratified 5-fold cross-validation, demonstrating robustness and real-time responsiveness. To enhance caregiver engagement, an agentic AI layer powered by OpenAI interprets the classification output, accesses user history, and generates personalized feedback for each user. End-to-end testing showed the system can deliver classification and feedback in under 8 seconds, with median inference latency below 0.3 seconds. By combining AIoT technologies with agentic intelligence and mobile accessibility, this framework bridges clinical research and real-world deployment, enabling early, proactive ASD screening and providing sustainable, family-centered mental health support directly at home.',
  },
  {
    type: 'Conference',
    title:
      'Fusion of Handcrafted and LSTM-Derived Features for Robust ASD Classification from Eye-Tracking Data',
    status: 'Accepted',
    conference:
      'ICSPIS 2025 – The 8th International Conference on Signal Processing & Information Security',
    date: '18–21 November 2025',
    abstract:
      'Accurate and scalable early detection of Autism Spectrum Disorder (ASD) remains a significant clinical challenge, particularly given the limitations of subjective behavioral assessments. This paper presents a hybrid machine learning framework that integrates both handcrafted scanpath features and deep temporal representations learned via a Long Short-Term Memory (LSTM) network from raw eye-tracking data. The approach is evaluated on a large, publicly available ASD eye-tracking dataset, augmented to 22,794 scanpath samples through data-driven jittering and normalization techniques. Handcrafted features capture domain-relevant statistics such as fixation duration, saccade amplitude, and scanpath entropy, while the LSTM extracts high-level sequential gaze dynamics. These feature sets are fused and used to train multiple classifiers followed by ensemble methods (voting and stacking) for robust ASD/TD classification. Results demonstrate that the KNN and SVM models achieve high accuracy (96.4% and 95.9%, respectively), while the stacking ensemble attains the best overall performance (97.6%), albeit with marginal improvement over the best single model. Comparative analysis shows that ensemble gains are most pronounced when base learners contribute complementary predictive value. The findings highlight the effectiveness of hybrid feature fusion and provide practical insights into the trade-offs between model complexity and classification performance for ASD screening using eye-tracking data.',
  },
  {
    type: 'Conference',
    title:
      'Hybrid Deep Neural Activation and ML Approach for Autism Screening from Eye-Tracking Data',
    status: 'Submitted',
    conference: 'IEEE 44th International Conference on Consumer Electronics',
    date: '03–05 February 2025',
    abstract:
      'Early and accurate detection of Autism Spectrum Disorder (ASD) is critical for enabling timely intervention and support. Recent advances in eye-tracking technologies and deep learning have facilitated objective, scalable approaches for ASD screening using visual attention patterns. In this study, we propose a robust hybrid methodology that extracts deep neural network activations from eye-tracking scanpath images using EfficientNetB0 and leverages these features for classification with a Support Vector Machine (SVM) optimized via grid search. Experiments were conducted on a public scanpath image dataset of 547 samples, encompassing both ASD and Typically Developing (TD) participants. After systematic image preprocessing, augmentation, and feature extraction, the optimized SVM classifier achieved an overall accuracy of 97\\%, with macro-averaged precision, recall, and F1-score all at 0.97 on the held-out test set. Comparative analysis with prior deep learning and ensemble-based pipelines demonstrates that the proposed approach attains state-of-the-art performance while maintaining computational efficiency and interpretability. These results position our hybrid pipeline as a practical tool for scalable, automated ASD screening from eye-tracking data.',
  },
  {
    type: 'Journal',
    title:
      'Hybrid Ensemble Learning for Autism Spectrum Disorder Screening Using Scanpath Features and Eye-Tracking Data',
    status: 'Submitted',
  },
  {
    type: 'Review Paper',
    title:
      'Home-Based Eye tracking for Early Autism Screening: A Narrative Review of Approaches, Evidence, and Implementation Challenges',
    status: 'Submitted',
  },
];

const awardsData: AwardItem[] = [
  {
    title: '3rd Place - Emirates Health Services Conference',
    achievement:
      'Home-Based Autism Screening through Agentic AI: A Scalable Framework for Empowering Families',
    description:
      'Recognized for an innovative, agentic AI-powered framework enabling convenient, home-based autism screening for families.',
    date: 'October 2025',
    images: [
      conf20241,
      conf20242,
      conf20243,
    ],
  },
  {
    title: '3rd Place - Al Amal Research Day 2024',
    achievement: 'Community-focused autism screening and awareness initiative',
    description:
      'Organized an interactive session on early autism screening in children, demonstrating home-based eye-tracking tools and educating parents and clinicians on accessible, technology-driven pathways to early diagnosis.',
    date: 'October 2024',
    images: [
      conf20251,
      conf20252,
      conf20253,
    ],
  },
];

const industrialData = [
  {
    icon: ExternalLink,
    title: 'RealEye Eye-Tracking Platform',
    description:
      'Advanced eye-tracking software used to capture and analyze eye movements of children during screening assessments.',
    link: 'https://www.realeye.io/',
    linkText: 'Visit RealEye',
    features: ['Calibration-free tracking', 'Webcam-based solution', 'Real-time data capture'],
  },
  {
    icon: ExternalLink,
    title: 'Parent Questionnaire System',
    description:
      'Comprehensive questionnaire designed for parents to provide behavioral and developmental information about their children.',
    link: '#questionnaire',
    linkText: 'Access Questionnaire',
    features: ['Standardized questions', 'Easy-to-use interface', 'Secure data collection'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Application',
    description:
      'Cross-platform mobile app enabling parents to access RealEye tests and questionnaires conveniently from their devices.',
    link: null,
    linkText: null,
    features: ['iOS & Android support', 'Integrated RealEye access', 'Built-in questionnaire', 'User-friendly interface'],
  },
  {
    icon: Brain,
    title: 'AI Screening Model',
    description:
      'Advanced machine learning model trained on publicly available datasets to detect and screen children for autism spectrum disorder.',
    link: null,
    linkText: null,
    features: ['High accuracy detection', 'Multi-dataset training', 'Real-time screening', 'Robust classification'],
  },
  {
    icon: Workflow,
    title: 'End-to-End Agentic AI Workflow',
    description:
      'Complete automated workflow orchestrating the entire screening process from initial assessment to final diagnosis support.',
    link: null,
    linkText: null,
    features: ['Automated data processing', 'n8n workflow automation', 'IoT integration', 'Real-time analytics', 'Seamless pipeline'],
  },
];

function PublicationCard({ item }: { item: AcademicItem }) {
  const [showAbstract, setShowAbstract] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl p-6 text-justify transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start justify-between mb-3">
        <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
          {item.type}
        </span>
        <span
          className={`px-3 py-1 text-sm font-semibold rounded-full ${
            item.status === 'Accepted'
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {item.status}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {item.title}
      </h3>

      {(item.conference || item.date) && (
        <p className="text-sm text-gray-600 mb-3">
          {item.conference && <span className="font-semibold">{item.conference}</span>}
          {item.conference && item.date && ' • '}
          {item.date && <span>{item.date}</span>}
        </p>
      )}

      {item.abstract && (
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setShowAbstract((prev) => !prev)}
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900"
          >
            <span>{showAbstract ? 'Hide abstract' : 'Show abstract'}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                showAbstract ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`mt-2 text-sm text-gray-700 overflow-hidden transition-all duration-200 ${
              showAbstract ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="whitespace-pre-line">
              {item.abstract}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function AwardCard({ item }: { item: AwardItem }) {
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-white border-2 border-yellow-300 rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center justify-between mb-4 gap-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">🏆</span>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-1">Date: {item.date}</p>
          </div>
        </div>
        {item.images?.length > 0 && (
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
            {item.images.length} photos
          </span>
        )}
      </div>

      <p className="text-lg font-semibold text-gray-800 mb-2">
        {item.achievement}
      </p>
      <p className="text-gray-600 mb-4">
        {item.description}
      </p>

      {item.images?.length > 0 && (
        <div className="mt-3">
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1">
            {item.images.map((src, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-48 h-32 md:w-64 md:h-40 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 mx-2"
              >
                <img
                  src={src}
                  alt={`${item.title} photo ${idx + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>

            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Achievements() {
  const [activeTab, setActiveTab] = useState<'publications' | 'awards' | 'industrial'>(
    'publications'
  );

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
                <PublicationCard key={index} item={item} />
              ))}
            </div>
          ) : activeTab === 'awards' ? (
            <div className="grid gap-6 max-w-4xl mx-auto">
              {awardsData.map((item, index) => (
                <AwardCard key={index} item={item} />
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
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
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
