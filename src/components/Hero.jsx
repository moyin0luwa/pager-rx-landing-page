
import HeroLogo from '../assets/default.png';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#0B345A] via-[#113e6a] to-[#15548a] text-white min-h-[80vh] flex items-center px-6 font-sans">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

        {/* Text Section */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Your AI Healthcare Companion
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto lg:mx-0">
            Simplify prescriptions. Track medications. Secure your health journey — anytime, anywhere.
          </p>

          {/* Centered Button */}
          <div className="flex justify-center lg:justify-start">
            <a
              href="#features"
              className="bg-cyan-400 hover:bg-cyan-500 text-white transition px-6 py-3 rounded-full text-base font-medium shadow-md"
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* Logo / Image Section */}
        <div className="flex justify-center">
          <img
            src={HeroLogo}
            alt="Pager-RX Logo"
            className="w-full max-w-xs md:max-w-sm drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
