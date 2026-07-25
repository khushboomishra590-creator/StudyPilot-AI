import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

function Home() {
    return (
        <div className="min-h-screen bg-slate-100">
            <Navbar />
            <Hero />
        </div>
    );
}

export default Home;