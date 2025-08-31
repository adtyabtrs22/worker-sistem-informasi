"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />

      <section className="relative overflow-hidden -mt-32">
        <div className="absolute inset-0">
          <Image
            src="/images/campus0.jpg"
            alt="University Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Welcome to the Official Website of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                    Information System
                  </span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                  ITK&#39;s Information Systems study program is intended as a
                  center of excellence in organizing information systems
                  education that can help improve the performance of companies
                  or organizations through the use of information technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold rounded-full hover:from-white-100 hover:to-white-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Explore Programs
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Area of interest
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300">
              <Image
                src="/logo/pm.png"
                alt="Sistem Informasi Logo"
                width={200}
                height={200}
                className="drop-shadow-xl mx-auto"
                priority
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Project Management
              </h3>
              <p className="text-gray-600">
                In the field of IT Science Project Manager, students learn three
                main competencies in this science which refers to the Talent
                Triangle issued by the Project Management Institute.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300">
              <Image
                src="/logo/audit.png"
                alt="Sistem Informasi Logo"
                width={200}
                height={200}
                className="drop-shadow-xl mx-auto"
                priority
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                IT Auditor
              </h3>
              <p className="text-gray-600">
                It Auditors study science related to IT Governance and IT
                management.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300">
              <Image
                src="/logo/ba.png"
                alt="Sistem Informasi Logo"
                width={200}
                height={200}
                className="drop-shadow-xl mx-auto"
                priority
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Business Analytic
              </h3>
              <p className="text-gray-600">
                There are 3 levels of competence that will be built by students
                in this field of science, namely personal effectiveness
                competencies, academic competencies, and competencies based on
                the work environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
