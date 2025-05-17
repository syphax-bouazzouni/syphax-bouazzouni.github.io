import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import config from "../config.ts";

export function GitHubContributions({ theme = "light" }) {
    const username = config.github
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    // Simulate a loading state for demonstration
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    // Handle any potential errors from the GitHub APIs
    const handleError = () => {
        setError("Failed to load GitHub data. Please try again later.");
        setIsLoading(false);
    };

    if (error) {
        return (
            <div className="p-6 text-center text-red-500 bg-red-50 rounded-lg">
                <p>{error}</p>
                <button
                    className="mt-2 px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200"
                    onClick={() => window.location.reload()}
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-8 py-4">
            <h2 className="text-2xl font-bold text-center mb-6">GitHub Activity</h2>

            {/* GitHub Calendar Section */}
            <div className="overflow-hidden">
                {isLoading ? (
                    <div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>
                ) : (
                    <div className="w-full overflow-x-auto py-2 flex justify-center items-center">
                            <GitHubCalendar
                                username={username}
                                fontSize={12}
                                blockSize={12}
                                blockMargin={4}
                                colorScheme="light"
                            />
                    </div>
                )}
            </div>

            {/* GitHub Stats Section */}
            <div className="flex flex-col md:flex-row justify-center  gap-6">
                {isLoading ? (
                    <>
                        <div className="w-full md:w-1/2 h-32 bg-gray-100 animate-pulse rounded-lg"></div>
                        <div className="w-full md:w-1/2 h-32 bg-gray-100 animate-pulse rounded-lg"></div>
                    </>
                ) : (
                    <>
                        {/* Top Languages Card */}
                        <div className="transition-transform hover:scale-105 duration-300">
                            <img
                                src={`https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&locale=en&layout=compact&theme=${theme}&hide_border=true&hide_rank=true`}
                                alt="Top languages"
                                className="rounded-lg shadow-md mx-auto"
                                onError={handleError}
                            />
                        </div>

                        {/* GitHub Stats Card */}
                        <div className="transition-transform hover:scale-105 duration-300">
                            <img
                                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&locale=en&theme=${theme}&hide_border=true&include_all_commits=true&count_private=true&hide_rank=true`}
                                alt="GitHub Stats"
                                className="rounded-lg shadow-md mx-auto"
                                onError={handleError}
                            />
                        </div>
                    </>
                )}
            </div>

            {/* Profile Views Counter */}
            {/*<div className="flex justify-center mt-8">*/}
            {/*    {isLoading ? (*/}
            {/*        <div className="w-48 h-8 bg-gray-100 animate-pulse rounded-full"></div>*/}
            {/*    ) : (*/}
            {/*        <div className="flex items-center bg-blue-50 px-6 py-3 rounded-full shadow-md transition-all hover:shadow-lg">*/}
            {/*            <img*/}
            {/*                src={`https://komarev.com/ghpvc/?username=${username}&label=Profile%20views&color=0e75b6&style=flat`}*/}
            {/*                alt="Profile views"*/}
            {/*                className="rounded"*/}
            {/*                onError={handleError}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}

            <div className="flex justify-center mt-6">
                <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Visit GitHub Profile
                </a>
            </div>
        </div>
    );
}
