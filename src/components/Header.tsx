import {useState} from "react";

export default function Header({activeSection}: { activeSection: string }) {
    const links = {
        about: "About",
        projects: "Projects",
        skills: "Skills",
        testimonials: "Testimonials",
        stats: "Stats",
    }

    const [open, setOpen] = useState(false);
    return <header>
        <nav className="glass-nav fixed w-full py-4 z-50 shadow-sm backdrop-blur-md bg-white/90">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#"
                   className="font-bold text-blue-600 text-2xl hover:text-blue-700 transition-colors duration-300"
                   aria-label="Home">SB</a>
                <div className="hidden md:flex space-x-10">
                    {Object.entries(links).map(([key, value]) => (
                        <a
                            href={`#${key}`}
                            key={key}
                            className={`section text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium ${
                                activeSection === 'about' ? 'text-blue-600' : ''
                            }`}
                        >
                            {value}
                        </a>
                    ))}
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden text-gray-700 focus:outline-none" aria-label="Menu" onClick={() => setOpen(!open)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
                {/* Mobile menu */}
                <div className={`md:hidden absolute top-16 right-0 bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                    {Object.entries(links).map(([key, value]) => (
                        <a
                            href={`#${key}`}
                            key={key}
                            className={`block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium ${
                                activeSection === 'about' ? 'text-blue-600' : ''
                            }`}
                        >
                            {value}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    </header>
}