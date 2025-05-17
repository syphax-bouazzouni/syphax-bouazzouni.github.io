import './App.css'
import {GitHubContributions} from "./components/GitHubContributions.tsx";
import Testimonials from "./components/Testimonials.tsx";
import {useEffect, useState} from 'react';
import Projects from "./components/Projects.tsx";
import About from "./components/About.tsx";
import Skils from "./components/Skils.tsx";
import config from "./config.ts";
import Header from "./components/Header.tsx";
import Story from "./components/Story.tsx";

export default function Home() {
    const [activeSection, setActiveSection] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const name = config.name
    const title = config.title
    const email = config.email
    const github = config.github
    const linkedIn = config.linkedin

    useEffect(() => {
        // Show content when loaded
        const timer = setTimeout(() => setIsLoading(false), 500);

        // Smooth scroll
        const anchors = document.querySelectorAll('a.section[href^="#"]');
        const handleClick = (e: any) => {
            e.preventDefault();
            const target = document.querySelector(e.currentTarget.getAttribute('href'));
            if (target) {
                target.scrollIntoView({behavior: 'smooth'});
                // Update URL without page reload
                window.history.pushState({}, '', e.currentTarget.getAttribute('href'));
            }
        };
        anchors.forEach(anchor => anchor.addEventListener('click', handleClick));

        // Intersection observer for animations and active section
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('animate-fade-in')) {
                        return;
                    }
                    entry.target.classList.add('animate-fade-in');

                    // Update active section for navigation
                    const id = entry.target.getAttribute('id');
                    if (id) {
                        setActiveSection(id);
                    }
                }
            });
        }, {threshold: 0.2, rootMargin: '-100px 0px -100px 0px'});

        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => observer.observe(section));

        // Cleanup
        return () => {
            clearTimeout(timer);
            anchors.forEach(anchor => anchor.removeEventListener('click', handleClick));
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);
    return (<>

        {isLoading && (
            <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
                <div className="animate-pulse text-2xl font-bold text-blue-600">SB</div>
            </div>
        )}

        <div className="bg-white text-gray-800 flex flex-col min-h-screen">
            <Header activeSection={activeSection}/>
            <main className="flex-grow pt-20">
                <section id="about" className="relative py-32 overflow-hidden">
                    <About/>
                </section>

                <section id="story">
                    <Story/>
                </section>

                <section id="projects" className="py-24 relative ">
                    <Projects/>
                </section>

                <section id="skills" className="py-24 bg-gray-50">
                    <Skils/>
                </section>

                <section id="testimonials" className="py-24 bg-gray-50">
                    <Testimonials/>
                </section>

                <section id="stats" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16 animate-on-scroll">
                            <h2 className="text-4xl font-bold mb-6 inline-block gradient-border">GitHub Stats</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">A snapshot of my open source contributions
                                and coding activity</p>
                        </div>

                        <GitHubContributions/>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-8 md:mb-0 text-center md:text-left">
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">{name}</h3>
                            <p className="text-gray-400 mt-2">{title}</p>
                        </div>

                        <div className="flex space-x-8 mb-8 md:mb-0">
                            <a href={"https://github.com/"+github} target="_blank"
                               className="text-gray-400 hover:text-white transition-colors duration-300">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M12 2C6.477 2 2 6.484 2 12.017C2 16.5 4.865 20.394 8.84 21.781C9.34 21.875 9.54 21.583 9.54 21.296C9.54 21.031 9.53 20.161 9.53 19.271C7 19.824 6.35 18.613 6.15 18.063C6.037 17.773 5.55 16.996 5.12 16.731C4.77 16.513 4.27 15.96 5.11 15.95C5.9 15.94 6.47 16.73 6.69 17.03C7.59 18.56 8.97 18.1 9.58 17.813C9.674 17.188 9.954 16.762 10.267 16.525C8.134 16.288 5.9 15.413 5.9 11.647C5.9 10.533 6.3 9.625 6.7 8.925C6.594 8.658 6.243 7.596 6.8 6.198C6.8 6.198 7.65 5.911 9.53 7.215C10.34 6.968 11.2 6.845 12.06 6.845C12.92 6.845 13.78 6.968 14.59 7.215C16.47 5.901 17.32 6.198 17.32 6.198C17.877 7.596 17.526 8.658 17.42 8.925C17.82 9.625 18.22 10.523 18.22 11.647C18.22 15.425 15.977 16.288 13.844 16.525C14.24 16.825 14.59 17.407 14.59 18.313C14.59 19.61 14.58 20.932 14.58 21.296C14.58 21.583 14.78 21.886 15.28 21.781C19.255 20.384 22.12 16.5 22.12 12.017C22.12 6.484 17.643 2 12.12 2H12Z"
                                          clipRule="evenodd"/>
                                </svg>
                            </a>
                            <a href={"https://www.linkedin.com/in/"+ linkedIn} target="_blank"
                               className="text-gray-400 hover:text-white transition-colors duration-300">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a href={"mailto:"+email}
                               className="text-gray-400 hover:text-white transition-colors duration-300">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="pt-8 mt-8 border-t border-gray-800 text-center">
                        <p className="text-gray-400">© {new Date().getFullYear()} {name}. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    </>)
}
