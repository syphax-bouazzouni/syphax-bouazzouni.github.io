import config from "../config.ts";

function DownloadSvg() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
}

function LinkedInSvg() {
    return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor"
                viewBox="0 0 24 24">
        <path
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
}

export default function About() {
    const name = config.name
    const description = config.description
    const title = config.title
    const linkedin = config.linkedin
    const cvLink = config.cvlink
    return <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center animate-fade-in">
        <span
            className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">{title}</span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight max-w-3xl">
            Hello <span role="img" aria-label="waving hand">👋</span>,
            I'm <span className="gradient-text">{name}</span></h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl">{description}</p>
        <div className="flex flex-wrap gap-4 justify-center">
            <a href={cvLink}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-white shadow-md text-gray-800 px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center">
                <DownloadSvg/>
                Download CV
            </a>
            <a href={"https://www.linkedin.com/in/" + linkedin}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center">
                <LinkedInSvg/>
                Connect
            </a>
    </div>
        </div>
}