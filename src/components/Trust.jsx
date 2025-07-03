import { FaUserShield, FaLock, FaHandsHelping } from 'react-icons/fa';

export default function Trust() {
  const reasons = [
    {
      icon: <FaUserShield className="text-cyan-500 text-4xl mb-4" />,
      title: 'Patient-Centered',
      description:
        'We prioritize your health and privacy with features tailored to your needs.'
    },
    {
      icon: <FaLock className="text-cyan-500 text-4xl mb-4" />,
      title: 'Secure Data',
      description:
        'All your medical information is encrypted and securely stored with best-in-class protocols.'
    },
    {
      icon: <FaHandsHelping className="text-cyan-500 text-4xl mb-4" />,
      title: 'Reliable Support',
      description:
        'Our team is dedicated to helping you stay on track with your medications and healthcare journey.'
    }
  ];

  return (
    <section id="trust" className="bg-[#f0f6fb] py-20 px-6 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Why Trust Pager-RX?
        </h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-12"></div>

        {/* Reason Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              {reason.icon}
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
