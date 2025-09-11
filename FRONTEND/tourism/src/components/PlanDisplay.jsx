const PlanDisplay = ({ plan }) => (
    <div className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Custom Itinerary</h3>
        <div className="prose prose-teal max-w-none text-gray-700 whitespace-pre-wrap">
            {plan}
        </div>
    </div>
);

export default PlanDisplay