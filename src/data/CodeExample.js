export const codeExamples = {
    "App.jsx": `
    import { useState } from "react";
    import { CodeFlow } from "@codeflow/ai";

    function App() {
    const [code, setCode] = useState("");

    const handleAICompletion = async () => {
        const suggestion = await CodeFlow.complete(code);
        setCode(suggestion);
    };

    return (
        <div className="app">
        <CodeEditor
            onChange={setCode}
            onAI={handleAICompletion}
        />
        </div>
    );
    }
    `,
    "Hero.jsx": `
    import { Sparkles, ArrowRight } from "lucide-react";

    export default function Hero() {
    return (
        <section className="hero">
        <div className="hero__badge">
            <Sparkles size={14} />
            AI-Powered Development
        </div>
        <h1>Ship features faster with CodeFlow</h1>
        <p>Generate, refactor, and explain code directly in your editor.</p>
        <button className="hero__cta">
            Start Building
            <ArrowRight size={16} />
        </button>
        </section>
    );
    }
    `,
    "Navbar.jsx": `
    import { useState } from "react";
    import { Menu, X } from "lucide-react";

    export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
        <a className="navbar__logo" href="#top">CodeFlow</a>
        <div className="navbar__links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#docs">Docs</a>
        </div>
        <button onClick={() => setOpen(!open)} className="navbar__toggle">
            {open ? <X size={18} /> : <Menu size={18} />}
        </button>
        </nav>
    );
    }
    `
};

export const floatingCards = {
    "App.jsx" : {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "AI",
        title: "Smart Completion",
        content: "AI-powered code suggestions in real-time"
    },
    "Hero.jsx" : {
        bgColor: "bg-purple-500/20",
        iconColor: "text-purple-400",
        textColor: "text-purple-200",
        contentColor: "text-purple-300",
        icon: "⚡︎",
        title: "Auto Animation",
        content: "Dynamic typing effects generated automatically"
    },
    "Navbar.jsx" : {
        bgColor: "bg-emerald-500/20",
        iconColor: "text-emerald-400",
        textColor: "text-emerald-200",
        contentColor: "text-emerald-300",
        icon: "🔍",
        title: "Smart Search",
        content: "Intelligent code search across your project"
    },
};