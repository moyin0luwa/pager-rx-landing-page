import { FaSearch, FaPills, FaSmile } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaSearch className="text-cyan-400 text-3xl mb-4" />,
      title: 'Step 1: Get a Prescription',
      description: 'Upload or scan your doctor’s prescription to begin tracking and managing it instantly.'
    },
    {
      icon: <FaPills className="text-cyan-400 text-3xl mb-4" />,
      title: 'Step 2: Track & Take',
      description: 'Receive smart reminders and dosage guidance — never miss a pill again.'
    },
    {
      icon: <FaSmile className="text-cyan-400 text-3xl mb-4" />,
      title: 'Step 3: Stay In Control',
      description: 'Monitor progress and renew prescriptions with ease, all in one place.'
    }
  ];

  return (
    <section id="how-it-works" className="bg-gradient-to-br from-[#0B345A] via-[#113e6a] to-[#15548a] text-white py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          How Pager-RX Works
        </h2>
        <div className="h-1 w-24 mx-auto bg-cyan-400 rounded-full mb-12"></div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center backdrop-blur-sm border border-white/10"
            >
              <div className="text-xs text-blue-100 font-semibold mb-1">Step {index + 1}</div>
              {step.icon}
              <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-blue-100 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
