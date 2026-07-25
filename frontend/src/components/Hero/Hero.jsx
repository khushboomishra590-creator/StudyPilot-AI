import DashboardPreview from "../DashboardPreview/DashboardPreview";
import Button from "../Button/Button";
function Hero() {
    return (
        <section className="min-h-screen max-w-7xl mx-auto px-6 flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Side */}
                <div>

                    <p className="text-blue-600 font-semibold uppercase">
                        AI Powered Study Assistant
                    </p>

                    <h1 className="text-6xl font-extrabold mt-4 leading-tight">
                        Study Smarter.
                        <br />
                        Score Higher.
                        <br />
                        Stress Less.
                    </h1>

                    <p className="mt-6 text-gray-600 text-xl">
                        Plan your semester, generate quizzes,
                        summarize notes and stay ahead with AI.
                    </p>

                    <div className="flex gap-4 mt-10">

                        <Button>
                            Get Started
                        </Button>

                        <Button variant="secondary">
                            Watch Demo
                        </Button>

                    </div>

                </div>

                {/* Right Side */}
                <DashboardPreview />

            </div>

        </section>
    );
}

export default Hero;