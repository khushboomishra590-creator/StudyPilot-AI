function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="text-5xl">
                {icon}
            </div>

            <h3 className="text-2xl font-bold mt-6">
                {title}
            </h3>

            <p className="text-gray-600 mt-3">
                {description}
            </p>

        </div>
    );
}

export default FeatureCard;