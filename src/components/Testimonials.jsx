import { Quote } from "lucide-react";
import sarahImg from "../assets/images/sarah_chen.png";
import emilyImg from "../assets/images/emily_warner.png";
import andrewImg from "../assets/images/andrew_cook.png";


const testimonials = [
    {
        name: "Sarah Chen",
        role: "Senior Developer",
        image: sarahImg,
        content: "CodeFlow AI cut my debugging time in half. The suggestions are actually relevant to our React codebase, and I can move from idea to production-ready features much faster.",

    },
    {
        name: "Emily Warner",
        role: "Frontend Engineer",
        image: emilyImg,
        content: "I use CodeFlow AI daily for component scaffolding and refactors. It keeps my code clean, speeds up repetitive tasks, and helps me stay focused on UX decisions.",
    },
    {
        name: "Andrew Cook",
        role: "Tech Lead",
        image: andrewImg,
        content: "What impressed me most is consistency. CodeFlow AI gives our team strong starting points for tests and architecture, which has improved delivery speed without sacrificing quality.",
    },
]

export default function Testimonials() {
    return <section id="testimonials" 
            className="py-16 sm:py-20 px-10 lg:px-8 relative" 
            >
                <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] delay-1000"></div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
                
                {/* left side - header */}
                    <div className="lg:w-1/2 w-full text-center lg:text-left">
                        <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                            What professionals are saying about us
                        </h2>
                        <p className="text-gray-300 text-base text-xl sm:text-lg leading-relaxed">
                            Choose the perfect plan for your need. All plans include a 14-day free trial.
                        </p> 
                    </div>
                {/* Right side - Testimonials */}

                <div className="lg:w-1/2 w-full">
                    <div className="flex flex-col gap-8 ">

                        {testimonials.map((testimonial, key) => (
                            
                            <div key={key} 
                            className="bg-slate-800/30 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl lg:rounded-2xl"
                            >

                                <div className="flex items-center space-x-3 sm:space-x-4">
                                    <div className="flex shrink-0">
                                        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-b from-blue-300 to-cyan-400 bg-clip-text text-transparent">
                                            "
                                        </div>
                                    </div>
                                    <div className="flex grow flex-col">
                                        <p className="text-white text-base sm:text-lg leading-relaxed text-center mb-3 sm:mb-4">
                                            {testimonial.content}
                                        </p>
                                    </div>        
                                    
                                    
                                </div>  

                                <div className="flex flex-row gap-4 items-center justify-center">
                                    <div>
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                                            />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-xs sm:text-base">{testimonial.name}</h4>
                                        <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                                
                                
                        
                        ))}
                    </div>

                </div>

                </div>
            </div>    
           </section>
}
