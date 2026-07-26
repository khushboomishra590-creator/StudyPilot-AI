import {
    Bot,
    CalendarDays,
    Flame,
    Target,
} from "lucide-react";
function DashboardPreview() {
    return (
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-[430px] border border-slate-200">

            {/* Greeting */}
            <div>
                <p className="text-slate-500 text-sm">
                    Welcome Back 👋
                </p>

                <h2 className="text-3xl font-bold mt-1">
                    Khushboo
                </h2>
            </div>

            {/* Progress */}
            <div className="mt-8">

                <div className="flex justify-between">
                    <div className="flex items-center gap-2 font-semibold">
                        <Target size={18} className="text-indigo-600" />
                        <span>Today's Goal</span>
                    </div>

                    <span className="text-indigo-600 font-bold">
                        82%
                    </span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-3 mt-3">
                    <div className="bg-indigo-600 h-3 rounded-full w-4/5"></div>
                </div>

            </div>

            {/* Study Streak */}

            <div className="mt-8 bg-orange-50 rounded-2xl p-4">

                <div className="flex items-center gap-2 font-semibold">
                    <Flame size={18} className="text-orange-500" />
                    <span>Study Streak</span>
                </div>

                <p className="text-3xl font-bold mt-2">
                    12 Days
                </p>

            </div>

            {/* Upcoming Exam */}

            <div className="mt-6 bg-slate-100 rounded-2xl p-5">

                <div className="flex items-center gap-2 font-semibold">
                    <CalendarDays size={18} className="text-indigo-600" />
                    <span>Upcoming Exam</span>
                </div>

                <p className="mt-2">
                    Computer Networks
                </p>

                <p className="text-indigo-600 mt-1">
                    5 Days Left
                </p>

            </div>

            {/* AI Coach */}

            <div className="mt-6 bg-indigo-50 rounded-2xl p-5">

                <div className="flex items-center gap-2 font-semibold">
                    <Bot size={18} className="text-indigo-600" />
                    <span>AI Coach</span>
                </div>
                <p className="text-slate-600 mt-2">
                    You're ahead of schedule.
                    Complete one more topic today!
                </p>

            </div>

        </div>
    );
}

export default DashboardPreview;