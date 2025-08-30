import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#00274C] text-white py-6 border-t border-[#001f3f] mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-4 gap-8">
        {/* Left: Logo & Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full md:w-1/2">
          <div className="flex-shrink-0">
            <Image
              src="/logo/logo.png"
              alt="University of Michigan Logo"
              width={80}
              height={80}
              className="bg-white p-2 rounded"
            />
          </div>
          <div className="text-sm">
            <div className="mb-1">
              © {new Date().getFullYear()} Kalimantan Institute of Technology
            </div>
            <div className="mb-1">
              Jln Sei Wain, Balikpapan, East Kalimantan, Indonesia
            </div>
          </div>
        </div>
        {/* Center: Social Media */}
        <div className="flex flex-col items-center gap-2 w-full md:w-1/4 mt-6 md:mt-0">
          <div className="font-semibold mb-1">Careers</div>
          <div className="flex gap-2">
            {/* Social icons, replace # with actual links */}
            <a href="#" className="bg-gray-500/70 rounded-full p-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="bg-gray-500/70 rounded-full p-2">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#" className="bg-gray-500/70 rounded-full p-2">
              <i className="fab fa-butterfly"></i>
            </a>
            <a href="#" className="bg-gray-500/70 rounded-full p-2">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="bg-gray-500/70 rounded-full p-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="bg-gray-500/70 rounded-full p-2">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#" className="bg-gray-500/70 rounded-full p-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        {/* Right: Badges */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-1/4 mt-6 md:mt-0 justify-end">
          <div className="flex-shrink-0">
            <Image
              src="/logo/transparency.png"
              alt="Transparency Reporting"
              width={100}
              height={100}
            />
            <div className="text-xs text-center mt-1">
              Transparency Reporting
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/logo/campus-safety.png"
              alt="Campus Safety"
              width={80}
              height={80}
            />
            <div className="text-xs text-center mt-1">Campus Safety</div>
          </div>
        </div>
      </div>
    </footer>
  );
}