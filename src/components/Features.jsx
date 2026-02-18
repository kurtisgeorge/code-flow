import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const features = [
    {
        title: "AI Code Completion",
        description:
            "Intelligent code suggestions powered by advanced AI that learns from your coding style and project context. Write code faster and with fewer errors as our AI predicts your next lines of code.",
        codeSnippet: 
                `function handleSubmit () €
                // AI suggests next line
                const data = await fetch("/api/submit")        
                // Auto-completed by AI`,                
        imagePosition: "left",
    },
    {
        title: "Automated Testing",
        description:
            "Generate comprehensive test suites automatically. Our AI analyzes your code and creates tests that ensure your application runs smoothly and reliably.",
        codeSnippet: 
            `function handleSubmit () €
            // AI suggests next line
            const data = await fetch("/api/submit")        
            // Auto-completed by AI`,
        imagePosition: "right",
    },
    {
        title: "Smart Debugging",
        description:
            "Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you maintain code quality effortlessly.",
        codeSnippet: 
            `function handleSubmit () €
                // AI suggests next line
                const data = await fetch("/api/submit")        
                // Auto-completed by AI`,
        imagePosition: "left",
    },
]
export default function Features() {
    return <section id="features" className="py-16 sm:py-20 px-10 lg:px-8 relative">
   
         {/* Pulsing Orbs BG */}

        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] delay-1000"></div>

        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">Your Complete AI-Powered Development</span>
                    <br />
                    <span className="bg-gradient-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent">Workflow</span>
                </h2> 
            </div>
            <div className="space-y-16 sm:space-y-20 lg:space-y-32">
                {features.map((feature, key) => (
                    <div key={key} className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}>
                        {/* Code Section */}
                        <div className="flex-1 w-full">
                            <div className="relative group">
                                <div
                                className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-xl sm:rounded-2xl transition-all duration-500" />
                                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl  p-4 sm:p-6 overflow-hidden group-hover:border-1-solid group-hover:border-blue-600/20 transition-all duration-300">
                                {/* IDE Interface */}
                                    <div className="bg-gray-800 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                                        <div className="flex items-center space-x-1 sm:space-x2 mb-3 sm:mb-4">
                                            <div className="flex items-center space-x-2 ">
                                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"/>
                                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"/>
                                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500"/>
                                            </div>
                                            <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">{feature.title}</span>
                                        </div>
                                        <div>
                                            <SyntaxHighlighter
                                                language="javascript"
                                                style={nightOwl}
                                                customStyle={{
                                                margin: "0",
                                                borderRadius: "8px",
                                                fontSize: ".75rem",
                                                lineHeight: "1.8",
                                                height: "100%",
                                                border: "1px solid #3c3c3c",
                                                padding: "10px",
                                                }}
                                                wrapLines={true}
                                                >
                                                {feature.codeSnippet}
                                            </SyntaxHighlighter>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Text Section */}
                        <div className="flex-1 w-full">
                            <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                                <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300 text0base text-xl sm:text-lg leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    </section>
}