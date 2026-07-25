function Home() {
    return (
        <main className="min-h-screen bg-slate-100 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-blue-600">
                    StudyPilot AI 🚀
                </h1>

                <p className="mt-4 text-gray-600 text-lg">
                    Your AI-powered study companion.
                </p>

                <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
                    Get Started
                </button>
            </div>
        </main>
    );
}

export default Home;