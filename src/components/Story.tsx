import {useEffect, useState} from 'react';
import {Briefcase, Calendar, ChevronRight, MapPin} from 'lucide-react';
import config from "../config.ts";

const CareerJourney = () => {
    const [activePath, setActivePath] = useState(null);
    const [planePosition1, setPlanePosition1] = useState(0);
    const [planePosition2, setPlanePosition2] = useState(0);

    // Map coordinates and settings
    const mapSettings = {
        algeriaCoords: {x: 400, y: 880},
        montpellierCoords: {x: 340, y: 700},
        berlinCoords: {x: 480, y: 500},
        algeriaToMontpellierPath: {controlPoint: {x: 400, y: 750}},
        montpellierToBerlinPath: {controlPoint: {x: 350, y: 580}},
        pathColor: "#6366F1",
        markerSize: 12,
        markerColor: "#6366F1",
        activeMarkerColor: "#EC4899",
        textColor: "#F3F4F6"
    };

    useEffect(() => {
        const animationDurationMs = 8000;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = (Date.now() - startTime) % animationDurationMs;
            const progress1 = elapsed / animationDurationMs;
            const progress2 = ((elapsed + animationDurationMs / 2) % animationDurationMs) / animationDurationMs;

            setPlanePosition1(progress1);
            setPlanePosition2(progress2);

            requestAnimationFrame(animate);
        };

        const animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    const getPosition = (t: number, start: { x: any; y: any; }, control: { x: any; y: any; }, end: { x: any; y: any; }) => {
        const x = (1 - t) * (1 - t) * start.x + 2 * (1 - t) * t * control.x + t * t * end.x;
        const y = (1 - t) * (1 - t) * start.y + 2 * (1 - t) * t * control.y + t * t * end.y;
        return {x, y};
    };

    const plane1Pos = getPosition(
        planePosition1,
        mapSettings.algeriaCoords,
        mapSettings.algeriaToMontpellierPath.controlPoint,
        mapSettings.montpellierCoords
    );

    const plane2Pos = getPosition(
        planePosition2,
        mapSettings.montpellierCoords,
        mapSettings.montpellierToBerlinPath.controlPoint,
        mapSettings.berlinCoords
    );

    const path1 = `M${mapSettings.algeriaCoords.x},${mapSettings.algeriaCoords.y} Q${mapSettings.algeriaToMontpellierPath.controlPoint.x},${mapSettings.algeriaToMontpellierPath.controlPoint.y} ${mapSettings.montpellierCoords.x},${mapSettings.montpellierCoords.y}`;
    const path2 = `M${mapSettings.montpellierCoords.x},${mapSettings.montpellierCoords.y} Q${mapSettings.montpellierToBerlinPath.controlPoint.x},${mapSettings.montpellierToBerlinPath.controlPoint.y} ${mapSettings.berlinCoords.x},${mapSettings.berlinCoords.y}`;

    const timelineItems = config.timeline

    const highlightLocation = (location: any) => {
        setActivePath(location);
    };

    const getIconForItem = (item: any) => {
        switch (item.icon) {
            case 'education':
                return <div className="p-1 rounded-full bg-blue-500 text-white"><Briefcase size={14}/></div>;
            case 'work':
                return <div className="p-1 rounded-full bg-indigo-500 text-white"><Briefcase size={14}/></div>;
            case 'promotion':
                return <div className="p-1 rounded-full bg-purple-500 text-white"><Briefcase size={14}/></div>;
            case 'freelance':
                return <div className="p-1 rounded-full bg-pink-500 text-white"><Briefcase size={14}/></div>;
            case 'travel':
                return <div className="p-1 rounded-full bg-green-500 text-white"><MapPin size={14}/></div>;
            default:
                return <div className="p-1 rounded-full bg-gray-500 text-white"><Calendar size={14}/></div>;
        }
    };

    const renderMarker = (coords: any, name: any, isActive: any, location: any) => {
        const markerColor = isActive ? mapSettings.activeMarkerColor : mapSettings.markerColor;
        return (
            <>
                <circle
                    cx={coords.x}
                    cy={coords.y}
                    r={mapSettings.markerSize}
                    fill={markerColor}
                    className="transition-all duration-300"
                />
                <text
                    x={location === 'berlin' ? coords.x : coords.x - 40}
                    y={location === 'berlin' ? coords.y + 50 : coords.y - 20}
                    fontSize="16"
                    fill={mapSettings.textColor}
                    className="font-medium"
                >
                    {name}
                </text>
            </>
        );
    };

    return (
        <div className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white p-4 md:p-8 ">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
                <div className="rounded-xl w-full md:w-1/2">
                    <div className="relative rounded-lg overflow-hidden w-full">
                        <div>
                            <img src={'map.svg'}/>
                            <div className="absolute inset-0 bg-gray-800/50 rounded-lg">
                                <svg viewBox="0 0 1200 1000" className="absolute inset-0 w-full h-full">
                                    {/* Paths */}
                                    <path
                                        d={path1}
                                        fill="none"
                                        stroke={activePath === 'montpellier' ? mapSettings.activeMarkerColor : mapSettings.pathColor}
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        className="transition-colors duration-300"
                                    />
                                    <path
                                        d={path2}
                                        fill="none"
                                        stroke={activePath === 'berlin' ? mapSettings.activeMarkerColor : mapSettings.pathColor}
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        className="transition-colors duration-300"
                                    />

                                    {/* Location markers */}
                                    {renderMarker(mapSettings.algeriaCoords, "Bejaia", activePath === 'algeria', 'algeria')}
                                    {renderMarker(mapSettings.montpellierCoords, "Montpellier", activePath === 'montpellier', 'montpellier')}
                                    {renderMarker(mapSettings.berlinCoords, "Berlin", activePath === 'berlin', 'berlin')}

                                    {/* Animated planes */}
                                    <text x={plane1Pos.x} y={plane1Pos.y} fontSize="16" textAnchor="middle" rotate={-45}
                                          dominantBaseline="middle">
                                        ✈️
                                    </text>

                                    <text x={plane2Pos.x} y={plane2Pos.y} fontSize="16" textAnchor="middle"
                                          dominantBaseline="middle">
                                        ✈️
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="bg-gray-800/70 p-4 rounded-xl">
                        <h2 className="text-xl font-bold mb-4 text-center text-indigo-300">Professional Timeline</h2>
                        <ul className="space-y-4">
                            {timelineItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`flex items-start p-3 rounded-lg transition-all duration-300 hover:bg-indigo-900/40 ${
                                        activePath === item.map_location ? 'bg-indigo-900/40 border-l-4 border-pink-500' : ''
                                    }`}
                                    onMouseEnter={() => highlightLocation(item.map_location)}
                                    onMouseLeave={() => setActivePath(null)}
                                >
                                    <div className="flex-shrink-0 mr-4 mt-1">
                                        {getIconForItem(item)}
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start">
                                            <div className="font-bold text-lg text-indigo-200 flex items-center gap-2">
                                                {item.title}
                                            </div>
                                            <div
                                                className="text-sm font-semibold bg-indigo-900/70 text-indigo-200 px-2 py-1 rounded">
                                                {item.year}
                                            </div>
                                        </div>
                                        {item.details && (
                                            <div className="text-gray-300 text-sm mt-1">
                                                {item.details}
                                            </div>
                                        )}
                                        <div className="flex items-center mt-2 text-xs text-gray-400">
                                            <MapPin size={14} className="mr-1"/>
                                            {item.location}
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className="flex-shrink-0 text-gray-500 ml-2 mt-1"/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerJourney;
