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
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">Simple, Transparent</span>
                        <br />
                        <span className="bg-gradient-to-b from-green-400 to-emerald-300 bg-clip-text text-transparent">Pricing Plans</span>
                    </h2> 
                    <p className="text-gray-300 text-base text-xl sm:text-lg leading-relaxed">
                        Choose the perfect plan for your need. All plans include a 14-day free trial.
                    </p>
                </div>
                {/* Pricing Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">

                    {plans.map((plan, key) => (
                        <div key={key} className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full 
                            ${plan.mostPopular 
                                ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105" 
                                : "border-slate-800 hover:border-slate-700" }`}></div>
                    ))}

                </div>

            </div>
        </section>
    );
}
