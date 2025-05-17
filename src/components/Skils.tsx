import config from "../config.ts";

export default function Skils() {
    const skils = config.skils
    return <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-6 inline-block gradient-border">Skills &
                Technologies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Tools and technologies I work with to build
                robust and scalable applications</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skils.map((skill, index) => (
                <div key={index}
                     className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 skill-card animate-on-scroll">
                    <div className="mb-4">
                        <img src={skill.img} alt={skill.name} className="w-14 h-14" loading="lazy"/>
                    </div>
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
}