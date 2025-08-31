import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#181c24] text-white py-6 border-t border-[#001f3f] mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-4 gap-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full md:w-1/2">
          <div className="flex-shrink-0">
            <Image
              src="/logo/logo2.png"
              alt="logo-itk"
              width={200}
              height={200}
              className="p-2 rounded"
            />
          </div>
          <div className="mw-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.015186290987!2d116.8594182605441!3d-1.1496413488345074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149298f826ab5%3A0x8489d5309f45c0db!2sInstitut%20Teknologi%20Kalimantan!5e0!3m2!1sid!2sid!4v1756620087185!5m2!1sid!2sid"
              width="200px"
              height="200px"
              style={{ border: 2 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-sm">
            <div className="mb-1">
              Jl. Soekarno Hatta No.KM 15, Karang Joang, Kec. Balikpapan Utara,
              Kota Balikpapan, Kalimantan Timur 76127
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 w-full md:w-1/4 mt-6 md:mt-0">
          <div className="font-semibold mb-1">Careers</div>
          <div className="flex gap-2">
            <a
              target="_blank"
              href="https://instagram.com"
              className="bg-orange-500/70 rounded-full"
            >
              <Image
                src="/logo/instagram.png"
                alt="sosial-media"
                width={35}
                height={35}
                className="p-2 rounded"
              />
            </a>
            <a
              target="_blank"
              href="https://facebook.com"
              className="bg-orange-500/70 rounded-full"
            >
              <Image
                src="/logo/facebook.png"
                alt="sosial-media"
                width={35}
                height={35}
                className="p-2 rounded"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-1/4 mt-6 md:mt-0 justify-end">
          <div className="flex-shrink-0">
            <div className="text-orange-400 text-md text-center mt-2">
              Telp 0542-8530800
              <br />
              Email is@itk.ac.id
            </div>
            <div className="mb-1 text-gray-500">
              © {new Date().getFullYear()} Kalimantan Institute of Technology
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
