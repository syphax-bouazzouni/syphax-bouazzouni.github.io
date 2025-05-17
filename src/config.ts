interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    startDate: string;
    endDate: string;
    role: string;
}

interface Recommendation {
    name: string;
    title: string;
    text: string;
    originalUrl?: string;
}
interface Timeline {
    year: string;
    title: string;
    details: string;
    location: string;
    icon: string;
    color: string;
    map_location: string;
}
interface Config {
    name: string;
    title: string;
    description: string;
    email: string;
    linkedin: string;
    github: string;
    cvlink?: string;
    projects: Project[];
    recommendations: Recommendation[];
    skils: {
        name: string;
        img: string;
    }[];
    timeline: Timeline[];
}

export default {
    name: "Syphax Bouazzouni",
    title: "Software Engineer",
    description: "I am a software engineer with a passion for building scalable and efficient systems. I have experience in various programming languages and frameworks, and I enjoy tackling complex challenges.",
    email: "bouazounisyphax@gmail.com",
    linkedin: "syphax-bouazzouni",
    github: "syphax-bouazzouni",
    cvlink: "https://github.com/syphax-bouazzouni/syphax-bouazzouni/blob/3d494e2b0a55c866cf433b66058cafa2baffa0d7/Software%20Engineer-%20Ruby%20on%20Rails%20-%20CV%20-%2004%3A25.pdf",
    skils: [
        {
            name: "Ruby",
            img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg"
        },
        {
            name: "React",
            img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
        },
        {
            name: "JavaScript",
            img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        },
        {
            name: "Java",
            img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
        },
        {name: "Spring", img: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg"},
        {
            name: "Docker",
            img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
        },
        {
            name: "Tailwind",
            img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
        },
        {name: "Bash", img: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"},
        {
            name: "TypeScript",
            img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
        },
        {name: "Git", img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"},
        {
            name: "AWS",
            img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
        },
        {
            name: "Redis",
            img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg"
        }],
    recommendations: [
        {
            "name": "Alex Skrenchuk",
            "title": "Sr. Systems Administrator at Stanford University",
            "text": `I had the pleasure of collaborating with Syphax Bouazzouni on a BioPortal/OntoPortal project, and I can confidently say he's one of the most dependable and positive team members I've worked with. As a lead developer at AgroPortal/LIRMM, Syphax brings a pragmatic, no-nonsense approach to solving problems, while maintaining a flexible and cheerful attitude that makes even the toughest challenges easier to tackle. Syphax is highly responsive, technically sharp, and always delivers on what he promises—often going above and beyond expectations. He's approachable, easy to work with, and brings a strong sense of ownership to his work. His ability to find workable solutions, keep things moving, and maintain a positive team dynamic makes him a true asset in any collaborative effort. I’m grateful to have had the chance to work alongside him, and I’d gladly do so again.`,
            "originalUrl": "https://www.linkedin.com/in/syphax-bouazzouni/details/recommendations/",
        },
        {
            "name": "Michael Dorf",
            "title": "Chief Software Architect at Stanford University",
            "text": "I have worked with Syphax on several projects related to the collaborative initiative called OntoPortal Alliance (OA). OA is a is a consortium of developers and researchers that contribute to the development of the OntoPortal software, designed to promote openly accessible ontology repositories. Syphax is an extremely proactive and resourceful software engineer. His impeccable knowledge of web technologies and triple store databases has helped us to drastically improve the OntoPortal software. Despite his technical abilities, Syphax is also a talented project manager and a leader. He is able to not only resolve technical challenges, but to oversee and manage all phases of the project, from the requirements gathering, to the design and implementation, and to the successful production deployment. Syphax is a quick learner who demonstrates a keen ability to learn and adopt new technologies when the project requires it. On the interpersonal level, Syphax is a pleasure to work with. He is thoughtful and insightful, fun person to be around outside of work and courteous and professional at work. I thoroughly enjoy having Syphax as my colleague and would enthusiastically recommend him to any team.",
            "originalUrl": "https://www.linkedin.com/in/syphax-bouazzouni/details/recommendations/",
        },
        {
            "name": "Bilel Kihal",
            "title": "Full-stack Developer at SEVEN",
            "text": "I’ve had the privilege of working alongside Syphax, and I can confidently say he is one of the most talented and dedicated professionals I’ve encountered. As a Software Engineer specializing in Ruby on Rails and JavaScript, Syphax combines technical expertise with exceptional leadership skills.\n\nTechnically, he is rock-solid. Whether it's designing scalable systems, troubleshooting complex issues, or writing clean, maintainable code, Syphax consistently delivers high-quality results. He’s also an expert at mentoring small teams, fostering collaboration, and ensuring projects stay on track. His ability to balance technical depth with team leadership is truly remarkable.\n\nWhat stands out the most is his unmatched work ethic. Syphax is the kind of teammate who will address GitHub comments promptly, even if it’s late at night, on weekends, or during holidays. His dedication ensures that the team never loses momentum.\n\nBeyond his skills and work ethic, Syphax is a great collaborator—always willing to listen, share knowledge, and support others. He’s someone you can count on, both professionally and personally.\n\nI’m confident Syphax will excel in any challenge he takes on. Anyone who has the chance to work with him is incredibly fortunate.",
            "originalUrl": "https://www.linkedin.com/in/syphax-bouazzouni/details/recommendations/",
        }
    ],
    projects: [
        {
            title: 'OntoPortal',
            description: "OntoPortal is an open-source platform for managing and publishing semantic data and ontologies.\nIt provides a web interface and REST APIs for storing, visualizing, and searching structured data.\nSupports ontology versioning, metadata management, and advanced search capabilities.\nDeployed in over 10 organizations across 6 countries, serving diverse domains.",
            tags: ['Ruby on Rails', 'Hotwire', 'NoSQL', "Docker", "SOLR", "Sidekiq", "Redis"],
            link: "https://ontoportal.org",
            startDate: '2020',
            endDate: 'Ongoing',
            role: 'Lead Developer',
        },
        {
            title: 'TS4NFDI API Gateway',
            description: 'Building innovative tools for the National Research Data Infrastructure, focusing on enhancing data discoverability, interoperability, and reusability across a federated API Gateway and reusable UI components.',
            tags: ['Java Spring', "REST API", "React", "PostgreSQL", 'K8s'],
            link: "https://ts4nfdi.github.io/api-gateway",
            startDate: '2024',
            endDate: 'Ongoing',
            role: 'Software Architect',
        },

    ],
    timeline: [
        {
            year: "2016",
            title: "CS student in Algeria",
            location: "Bejaia, Algeria",
            icon: "education",
            color: "blue",
            map_location: "algeria"
        },
        {
            year: "2018-2020",
            title: "Freelance Developer",
            details: "Working with PHP Laravel and Angular",
            location: "Bejaia, Algeria",
            icon: "work",
            color: "blue",
            map_location: "algeria"
        },
        {
            year: "2020",
            title: "Master Internship",
            details: "Relocated from Algeria to France",
            location: "Montpellier, France",
            icon: "travel",
            color: "indigo",
            map_location: "montpellier"
        },
        {
            year: "2021",
            title: "Full Stack Developer",
            details: "Graduated and hired as a full stack developer at LIRMM",
            location: "Montpellier, France",
            icon: "work",
            color: "indigo",
            map_location: "montpellier"
        },
        {
            year: "2023",
            title: "Lead Developer at LIRMM",
            details: "Led the OntoPortal project with a team of two junior developers and 1-2 interns",
            location: "Montpellier, France",
            icon: "promotion",
            color: "indigo",
            map_location: "montpellier"
        },
        {
            year: "2023",
            title: "Freelance Consultant",
            details: "For Lifewatch Eric (Italy) and Stanford (USA)",
            location: "Montpellier, France",
            icon: "freelance",
            color: "indigo",
            map_location: "montpellier"
        },
        {
            year: "2024",
            title: "Software Architect at Infai",
            details: "Relocated to Berlin to join Infai as a Software Architect",
            location: "Berlin, Germany",
            icon: "work",
            color: "purple",
            map_location: "berlin"
        }
    ]
} as Config;