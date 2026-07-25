import FeatureCard from "../FeatureCard/FeatureCard";

function Features() {

    const features = [
        {
            icon: "🤖",
            title: "AI Study Planner",
            description:
                "Generate a personalized study schedule based on your subjects and exams.",
        },
        {
            icon: "📝",
            title: "Notes Summarizer",
            description:
                "Convert lengthy notes into concise and easy-to-revise summaries.",
        },
        {
            icon: "📊",
            title: "Progress Analytics",
            description:
                "Track completed tasks, study streaks, and your overall performance.",
        },
    ];

    return (
        <section
            id="features"
            className="max-w-7xl mx-auto px-6 py-24"
        >
            <h2 className="text-4xl font-bold text-center">
                Everything You Need to Study Better
            </h2>

            <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
                StudyPilot AI combines intelligent planning, AI assistance, and
                analytics to help you achieve your academic goals.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>

        </section>
    );
}

export default Features;