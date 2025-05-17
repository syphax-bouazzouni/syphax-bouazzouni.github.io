import {useState} from "react";
import {Quote} from "lucide-react";
import config from "../config.ts";



export default function Testimonials() {
    const [expandedId, setExpandedId] = useState(null);
    const recommendations = config.recommendations

    const toggleExpand = (index: any) => {
        setExpandedId(expandedId === index ? null : index);
    };

    return <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-6 inline-block gradient-border">What People Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Feedback from colleagues and clients I've had
                the
                pleasure to work with</p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {recommendations.map((rec, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col h-full relative overflow-hidden"
                >
                    <Quote className="text-gray-200 absolute top-4 right-4" size={32}/>

                    <div className="my-4 flex-grow">
                        <p className={`text-gray-700 italic text-justify text-md leading-relaxed ${
                            expandedId === index ? "" : "line-clamp-4"
                        }`}>
                            "{rec.text}"
                        </p>

                        {rec.text.length > 150 && (
                            <button
                                onClick={() => toggleExpand(index)}
                                className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-2"
                            >
                                {expandedId === index ? "Show less" : "Read more"}
                            </button>
                        )}
                    </div>

                    <div className="border-t border-indigo-300 pt-4 mt-auto">
                        <p className="font-semibold text-gray-900">{rec.name}</p>
                        <p className="text-sm text-gray-500">{rec.title}</p>
                        {rec.originalUrl && (
                            <a
                                href={rec.originalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-medium hover:underline mt-1 inline-block"
                            >
                                View Original
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
}
