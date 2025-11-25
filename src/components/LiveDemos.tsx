import { useState } from 'react';
import { Smartphone, Eye, Code, X } from 'lucide-react';

type DemoItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
  video?: string; // YouTube embed URL
  link?: string;  // External URL
};

const demos: DemoItem[] = [
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Watch the mobile prediction app in action',
    // YouTube embed URL for: https://youtu.be/_rhBR-PbcjI
    video: 'https://www.youtube.com/embed/_rhBR-PbcjI',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: Eye,
    title: 'RealEye Test',
    description: 'Experience eye-tracking calibration',
    link: 'https://app.realeye.io/test/fcdd6b2f-38c0-45ff-a4ba-a8d9feaf5fc3/run?realeye-eyetracker-quick_calibration=1',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Code,
    title: 'Agentic AI Workflow',
    description: 'Watch workflow automation in action',
    // YouTube embed URL for: https://youtu.be/1JMnLtFhwKI
    video: 'https://www.youtube.com/embed/1JMnLtFhwKI',
    color: 'from-blue-700 to-blue-800',
  },
];

export default function LiveDemos() {
  const [showVideo, setShowVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleCardClick = (demo: DemoItem) => {
    if (demo.video) {
      setSelectedVideo(demo.video);
      setShowVideo(true);
    } else if (demo.link) {
      window.open(demo.link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleClose = () => {
    setShowVideo(false);
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Live Demos
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our platform capabilities through interactive demonstrations
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo, index) => {
            const Icon = demo.icon;
            const isVideo = !!demo.video;

            return (
              <button
                key={index}
                type="button"
                onClick={() => handleCardClick(demo)}
                className="group relative bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden text-left cursor-pointer w-full"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">
                    {demo.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-blue-50 transition-colors duration-300">
                    {demo.description}
                  </p>

                  {isVideo && (
                    <p className="mt-3 text-xs uppercase tracking-wide text-blue-300 group-hover:text-blue-50">
                      Click to watch demo
                    </p>
                  )}

                  {!isVideo && demo.link && (
                    <p className="mt-3 text-xs uppercase tracking-wide text-yellow-200 group-hover:text-yellow-50">
                      Opens in new tab
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {showVideo && selectedVideo && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full relative p-4">
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
                onClick={handleClose}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full rounded-lg overflow-hidden aspect-video">
                <iframe
                  src={selectedVideo}
                  title="Demo video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
