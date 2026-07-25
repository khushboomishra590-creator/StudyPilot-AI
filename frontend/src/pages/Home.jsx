import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";

function Home() {
    return (
        <div className="min-h-screen bg-slate-100">
            <Navbar />
            <Hero />
            <Features />
        </div>
    );
}

export default Home;