import { Star, Check, ArrowRight } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "19.99",
        description: "Best for solo devs and side projects",
        features: [
            "Up to 5 team members",
            "20GB storage",
            "Core analytics",
            "Email support",
            "API Access",
            "Up To 3 Workspaces",
            "Community access",
            "Mobile app",
            ,
        ],
        mostPopular: false,
    },
    {
        name: "Pro",
        price: "49.99",
        description: "Built for growing teams shipping faster",
        features: [
            "Up to 15 team members",
            "100GB storage",
            "Advanced analytics",
            "Priority email support",
            "API Access",
            "Unlimited workspaces",
            "Community access",
            "Mobile app",
        ],
        mostPopular: true,
    },
    {
        name: "Enterprise",
        price: "99.99",
        description: "For organizations needing scale and control",
        features: [
            "Unlimited team members",
            "1TB storage",
            "Advanced analytics",
            "Custom analytics dashboards",
            "24/7 phone support",
            "API Access",
            "Unlimited workspaces",
            "Community access",
            "Mobile app",
            "Dedicated success manager",
            "SSO + advanced security",
        ],
        mostPopular: false,
    },
];

export default function Pricing() {
    return (
        <section 
            id="pricing" 
            className="py-16 sm:py-20 px-10 lg:px-8 relative" 
            >
            <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] delay-1000"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">Simple, Transparent</span>
                        <br />
                        <span className="bg-gradient-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent">Pricing Plans</span>
                    </h2> 
                    <p className="text-gray-300 text-base text-xl sm:text-lg leading-relaxed">
                        Choose the perfect plan for your need. All plans include a 14-day free trial.
                    </p>
                </div>
                {/* Pricing Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 text-center">

                    

                    {plans.map((plan, key) => (
                        <div key={key} className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full 
                            ${plan.mostPopular 
                                ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105" 
                                : "border-slate-800 hover:border-slate-700" }`}
                                
                                >
                    <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-lg"/>
                                    {plan.mostPopular && (
                                        <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                                            <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-2 bg-linear-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                                                <Star className="w-3 h-3 sm:w-3 sm:h-3 fill-white"/>
                                                <span>Most Popular</span>
                                            </div>
                                        </div>
                                    )}
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold mb-2">
                                            {plan.name}
                                        </h3>
                                        <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                                            {plan.description}
                                        </p>
                                        <div className="flex items-baseline justify-center mb-5 sm:mb-6">
                                            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-b from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                                ${plan.price}
                                            </span>
                                            <span className="text-gray-400 text-sm text-base ml-1 sm:ml-2">
                                                /month
                                            </span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row">
                                        {plan.features.map((feature, featureKey) => (
                                            <li key={featureKey} className="flex space-x-2 sm:space-x-3 items-center">
                                                <div className="flex shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-blue-400 rounded-full items-center justify-center">
                                                    <Check className="w-2.5 h-2.5 stroke-5 text-white"/>
                                                </div>
                                                <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button 
                                        key={key}
                                        className={`group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-b rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 
                                        ${plan.mostPopular 
                                        ? "from-blue-600/90 to-blue-500/90" 
                                        : "from-gray-800/90 to-gray-800/80" }`}>
                                        
                                        <span>Start Coding Free</span>
                                        
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 translate-transform duration-300"/>
                                    </button>
                                </div>
                    ))}
                </div>
                <div className="mt-8 sm:mt-12 text-center">
                    <p className="text-gray-400 text-base text-xl">
                        Need a custom plan? {""}
                        <a href="#" className="text-blue-400 hover:text-blue-300 duration-300 ">Contact our sales team</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
