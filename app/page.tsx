import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-12 space-y-12 bg-gray-50 sm:px-12 font-sans">
      
      {/* Section: Header / Contact */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight uppercase">Sutthiwit Sriyotha</h1>
        <p className="text-xl text-blue-600 font-semibold tracking-wide">DEVELOPER</p>
        <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm sm:text-base mt-2">
          <a href="tel:0934918615" className="hover:text-blue-600 transition-colors">📞 093-491-8615</a>
          <span className="hidden sm:inline">|</span>
          <a href="mailto:sutthiwitsriyotha@gmail.com" className="hover:text-blue-600 transition-colors">✉️ sutthiwitsriyotha@gmail.com</a>
          <span className="hidden sm:inline">|</span>
          <a href="https://github.com/SutthiwitSriyotha" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">🐙 GitHub: SutthiwitSriyotha</a>
        </div>
      </section>

      {/* Section: Summary */}
      <section className="w-full max-w-4xl p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-4">Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          I am studying Software Engineering at the University of Phayao and would like to apply my skills to real-world projects. 
          I am currently seeking an internship from June 8, 2026, to September 25, 2026, to gain hands-on experience and grow professionally.
        </p>
      </section>

      {/* Section: Education */}
      <section className="w-full max-w-4xl p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-4">Education</h2>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Bachelor of Engineering (Software Engineering)</h3>
            <p className="text-gray-600 mt-1">University of Phayao</p>
          </div>
          <div className="text-left sm:text-right mt-2 sm:mt-0">
            <p className="text-gray-800 font-medium">2022 - 2026</p>
            <p className="text-gray-600 text-sm mt-1">Cumulative GPA: 3.29</p>
          </div>
        </div>
      </section>

      {/* Section: Skills & Tools */}
      <section className="w-full max-w-4xl p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-6">Skills & Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Frontend & Backend</h3>
            <p className="text-gray-700 leading-relaxed">
              TypeScript, JavaScript (ES6+), HTML/CSS, Next.js / React.js, Tailwind CSS, Node.js/Nest.js
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Databases</h3>
            <p className="text-gray-700 leading-relaxed">
              MongoDB, SQL Server/MySQL, Prisma/Redis
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Tools</h3>
            <p className="text-gray-700 leading-relaxed">
              Github/GitLab, VS Code / Postman, Figma / Miro, Jira / Trello, draw.io/Canva, MS Planner, pnpm/Yarn
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Infrastructure</h3>
            <p className="text-gray-700 leading-relaxed">
              Docker, MinIO, XAMPP
            </p>
          </div>
        </div>
      </section>

      {/* Section: Work Experience */}
      <section className="w-full max-w-4xl p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-6">Work Experience</h2>
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h3 className="text-xl font-semibold text-gray-900">Frontend Developer Intern</h3>
            <span className="text-blue-600 font-medium text-sm mt-1 sm:mt-0 bg-blue-50 px-3 py-1 rounded-full">Nov 2025 - Feb 2026</span>
          </div>
          <p className="text-gray-700 font-medium">Division of Educational Services, University of Phayao</p>
          <p className="text-gray-800 text-sm font-semibold mt-4">Project: UP-PSF Digital Assessment System</p>
          <ul className="mt-3 space-y-2 list-disc list-outside ml-5 text-gray-600 marker:text-gray-400 text-sm leading-relaxed">
            <li>Developed a fully paperless faculty assessment system using Next.js, TypeScript, and Tailwind CSS in an Agile Scrum environment.</li>
            <li>Designed a status-driven workflow system for document routing, task assignment, and conditional UI rendering based on document states.</li>
            <li>Built a scalable Role-Based Access Control system supporting dynamic roles and multi-role assignments, enabling precise control of menus, routes, and action permissions.</li>
            <li>Integrated front-end with NestJS REST APIs and implemented secure file uploads using MinIO Object Storage.</li>
            <li>Performed data validation, cross-browser testing, and resolved UI issues during UAT.</li>
          </ul>
        </div>
      </section>

      {/* Section: Academic Projects */}
      <section className="w-full max-w-4xl">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Academic Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          
          {/* Project 1 */}
          <div className="flex flex-col p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative w-full h-48 overflow-hidden rounded-xl bg-gray-100 mb-5">
              {/* เปลี่ยน src รูปภาพเป็นของโปรเจกต์คุณจริงๆ นะครับ */}
              <Image className="object-cover" src="/project-restaurant.png" alt="Restaurant Management Web App" fill sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Restaurant Management Web App</h3>
            <p className="text-sm text-blue-600 font-medium mb-4">2025</p>
            <ul className="space-y-2 list-disc list-outside ml-4 text-sm text-gray-600 marker:text-gray-400">
              <li>Developed a comprehensive QR-based restaurant management system featuring real-time order tracking.</li>
              <li>Created a store dashboard for payment confirmation and sales history reporting with Excel export.</li>
              <li>Built full-stack architecture with secure API integration using MongoDB.</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative w-full h-48 overflow-hidden rounded-xl bg-gray-100 mb-5">
              {/* เปลี่ยน src รูปภาพเป็นของโปรเจกต์คุณจริงๆ นะครับ */}
              <Image className="object-cover" src="/project1.png" alt="Online Plant Store" fill sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Online Plant Store</h3>
            <p className="text-sm text-blue-600 font-medium mb-4">2024</p>
            <ul className="space-y-2 list-disc list-outside ml-4 text-sm text-gray-600 marker:text-gray-400">
              <li>Conducted user interviews to identify pain points and establish core requirements.</li>
              <li>Designed wireframes, user journeys, and high-fidelity prototypes using Figma.</li>
              <li>Built a responsive front-end with clean UI components based on user feedback.</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}
