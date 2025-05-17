import config from "../config.ts";

const projects = config.projects

export default function Projects() {
    return <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 animate-on-scroll">
                <h2 className="text-4xl font-bold mb-6 inline-block gradient-border">Professional Projects</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Open-source contributions and professional projects I'm currently  on the past worked on</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <div key={index}
                         className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 project-card animate-on-scroll">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2"></div>
                        <div className="p-8">
                            <div className="mb-6 flex justify-between items-center">
                                <div>
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    <p className="text-gray-500 text-sm">{project.startDate} - {project.endDate}</p>
                                </div>
                                <span
                                    className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">{project.role}</span>
                            </div>
                            <p className="text-gray-600 mb-6 text-lg">{project.description}</p>
                            <div className="flex flex-wrap gap-3 mb-8">
                                {project.tags.map((tag, index) => (
                                    <span key={index}
                                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{tag}</span>
                                ))}
                            </div>
                            <a href={project.link}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 flex items-center group">
                                View Project
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </div>
}