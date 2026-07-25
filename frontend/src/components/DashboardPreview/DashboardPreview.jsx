function DashboardPreview() {
    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 w-[380px]">

            <h2 className="text-xl font-bold text-slate-800">
                📚 Dashboard
            </h2>

            <div className="mt-6">
                <p className="font-semibold">Today's Goal</p>

                <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                    <div className="bg-blue-600 h-3 rounded-full w-4/5"></div>
                </div>

                <p className="mt-2 text-sm text-gray-500">
                    80% Completed
                </p>
            </div>

            <div className="mt-8">
                <p className="font-semibold">
                    🤖 AI Recommendation
                </p>

                <div className="bg-blue-50 rounded-xl p-4 mt-3 text-gray-700">
                    Revise Java for 2 hours today.
                </div>
            </div>

            <div className="mt-8">
                <p className="font-semibold">
                    📅 Upcoming Exam
                </p>

                <div className="bg-slate-100 rounded-xl p-4 mt-3">
                    Computer Networks
                    <br />
                    <span className="text-blue-600">
                        5 Days Left
                    </span>
                </div>
            </div>

        </div>
    );
}

export default DashboardPreview;