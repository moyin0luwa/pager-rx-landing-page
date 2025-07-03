import { FaPrescriptionBottleAlt, FaMobileAlt, FaShieldAlt, FaStore } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      title: 'Prescription Manager',
      description: 'Track dosages, set reminders, and manage multiple prescriptions with ease.',
      icon: <FaPrescriptionBottleAlt className="text-cyan-500 text-3xl mb-4" />,
      highlight: true
    },
    {
      title: 'USSD Access',
      description: 'Access your prescription assistant even without internet connectivity.',
      icon: <FaMobileAlt className="text-cyan-500 text-3xl mb-4" />
    },
    {
      title: 'Secure & Private',
      description: 'Your medical data is encrypted and handled with utmost confidentiality.',
      icon: <FaShieldAlt className="text-cyan-500 text-3xl mb-4" />
    },
    {
      title: 'Health Marketplace',
      description: 'Browse verified pharmacies and healthcare providers within the app.',
      icon: <FaStore className="text-cyan-500 text-3xl mb-4" />
    }
  ];

  return (
    <section id="features" className="bg-[#f0f6fb] text-gray-800 py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          What Pager-RX Can Do For You
        </h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-12"></div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
