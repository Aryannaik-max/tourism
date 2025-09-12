import React, { useState } from 'react';
import { Users, CalendarDays, MapPin, Sparkles, MessageCircle, ArrowRight, Tag, Compass, IndianRupee } from 'lucide-react';

// Reusable components for a clean and structured layout
const TitleSection = () => (
    <div className="flex items-center text-gray-800 mb-6">
        <Sparkles className="w-10 h-10 text-emerald-500 mr-4"/>
        <h1 className="text-4xl md:text-5xl font-extrabold">Tell us your preferences</h1>
    </div>
);

const PriceTier = ({ label, isSelected, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className={`flex-1 flex flex-col items-center p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
            isSelected
                ? 'bg-emerald-600 text-white shadow-xl'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
        }`}
    >
        <IndianRupee className="w-6 h-6 mb-2" />
        <span className="font-semibold">{label}</span>
    </button>
);

const DurationPill = ({ days, isSelected, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className={`flex-1 flex flex-col items-center p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
            isSelected
                ? 'bg-emerald-600 text-white shadow-xl'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
        }`}
    >
        <CalendarDays className="w-6 h-6 mb-2" />
        <span className="font-semibold">{days} Days</span>
    </button>
);

const InterestPill = ({ name, isSelected, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
            isSelected
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
    >
        {name}
    </button>
);

const PlanDisplay = ({ plan }) => {
    const [openDay, setOpenDay] = useState(null);

    const toggleDay = (dayIndex) => {
        setOpenDay(openDay === dayIndex ? null : dayIndex);
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Custom Plans</h2>
            <div className="space-y-4">
                {plan.map((itinerary, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Plan #{index + 1}: {itinerary.title}</h3>
                                <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                                    <Tag className="w-4 h-4 text-emerald-500" />
                                    {itinerary.theme}
                                </p>
                            </div>
                            <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
                                Est. ₹{itinerary.totalCost.toLocaleString('en-IN')}
                            </span>
                        </div>
                        <p className="text-gray-700 mb-4">{itinerary.description}</p>

                        <div className="mt-4 space-y-2">
                            {itinerary.days.map((day, dayIndex) => (
                                <div key={dayIndex} className="border-t border-gray-200 pt-2">
                                    <button
                                        onClick={() => toggleDay(dayIndex)}
                                        className="w-full text-left flex justify-between items-center py-2"
                                    >
                                        <h4 className="text-lg font-semibold text-gray-800">
                                            Day {dayIndex + 1}: {day.theme}
                                        </h4>
                                        <svg
                                            className={`w-5 h-5 transition-transform duration-200 ${openDay === dayIndex ? 'transform rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {openDay === dayIndex && (
                                        <ul className="list-disc list-inside pl-4 mt-2 space-y-1 text-gray-600">
                                            {day.activities.map((activity, activityIndex) => (
                                                <li key={activityIndex}>{activity}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center p-8 text-center text-gray-600">
        <svg className="animate-spin h-10 w-10 text-emerald-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="text-lg font-medium text-gray-800">Crafting your perfect itinerary...</p>
        <p className="text-sm text-gray-600 mt-1">This may take a moment as our AI works its magic.</p>
    </div>
);

const ErrorDisplay = ({ message }) => (
    <div className="bg-red-50 border-l-4 border-red-400 text-red-700 p-4 rounded-md mt-4" role="alert">
        <div className="flex items-center">
            <MessageCircle className="h-6 w-6 mr-3 text-red-500" />
            <p className="font-semibold text-lg">Error:</p>
        </div>
        <p className="mt-2 text-sm">{message}</p>
    </div>
);

const ItineraryPlanner = () => {
    const [budgetRange, setBudgetRange] = useState('Medium');
    const [days, setDays] = useState(3);
    const [people, setPeople] = useState(2);
    const [startDate, setStartDate] = useState('');
    const [selectedInterests, setSelectedInterests] = useState([]);

    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const interests = [
        'Wildlife & Nature', 'Cultural Heritage', 'Adventure Sports', 'Waterfalls',
        'Religious Sites', 'Tribal Culture', 'Photography', 'Trekking'
    ];

    const handleInterestToggle = (interest) => {
        setSelectedInterests(prev =>
            prev.includes(interest)
                ? prev.filter(c => c !== interest)
                : [...prev, interest]
        );
    };
    
    const generatePlan = async () => {
        if (selectedInterests.length === 0) {
            setError("Please select at least one interest to generate an itinerary.");
            return;
        }

        setLoading(true);
        setError(null);
        setPlan(null);

        // Simulate a call to a backend AI service with dynamic data
        const mockApiPayload = {
            budgetRange,
            days,
            people,
            startDate,
            interests: selectedInterests
        };

        console.log('Generating itinerary with payload:', mockApiPayload);

        const mockApiResponse = [];

        // --- Generate multiple, different mock plans based on inputs ---

        // Plan 1: Based on selected interests
        let plan1Activities = [];
        if (selectedInterests.includes('Wildlife & Nature')) {
            plan1Activities.push('Visit Betla National Park for a wildlife safari.');
        }
        if (selectedInterests.includes('Waterfalls')) {
            plan1Activities.push('Explore the beautiful Hundru Falls and Dassam Falls.');
        }
        if (selectedInterests.includes('Cultural Heritage')) {
            plan1Activities.push('Visit the ancient temples and historical sites in Ranchi.');
        }
        if (selectedInterests.includes('Trekking')) {
            plan1Activities.push('Go for a scenic trek in the Parasnath Hills.');
        }
        if (selectedInterests.length === 0) {
            plan1Activities.push('Explore a mix of popular attractions and local markets.');
        }

        mockApiResponse.push({
            title: `A ${days}-Day ${budgetRange} Budget Trip`,
            theme: `Tailored to your interests: ${selectedInterests.join(', ')}`,
            totalCost: budgetRange === 'Low' ? 10000 : budgetRange === 'High' ? 30000 : 20000,
            description: `A personalized itinerary combining the best of Jharkhand based on your preferences for ${selectedInterests.join(', ')}.`,
            days: Array.from({ length: days }, (_, i) => ({
                theme: `Day ${i + 1}`,
                activities: [
                    plan1Activities[i % plan1Activities.length] || 'Explore the local area and try local cuisine.',
                    'Enjoy your evening and relax at the hotel.'
                ]
            }))
        });

        // Plan 2: A different plan for comparison
        let plan2Activities = [];
        plan2Activities.push('Visit Patratu Valley and its famous dam.', 'Explore local tribal markets and buy handcrafted souvenirs.', 'Experience the serene sunrise at Netarhat.');
        if (selectedInterests.includes('Photography')) {
            plan2Activities.push('Visit a scenic location at golden hour for a photography session.');
        }
        
        mockApiResponse.push({
            title: `Explorer's Choice`,
            theme: `An alternative ${days}-Day plan`,
            totalCost: budgetRange === 'Low' ? 12000 : budgetRange === 'High' ? 35000 : 22000,
            description: `An alternative itinerary with a focus on scenic beauty and local immersion, perfect for a different kind of adventure.`,
            days: Array.from({ length: days }, (_, i) => ({
                theme: `Day ${i + 1}`,
                activities: [
                    plan2Activities[i % plan2Activities.length] || 'Discover a new local attraction.',
                    'Dine at a highly-rated restaurant.'
                ]
            }))
        });
        
        setTimeout(() => {
            setPlan(mockApiResponse);
            setLoading(false);
        }, 2000); // Simulate network delay

    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 font-sans p-4 sm:p-6 lg:p-8">
            <main className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Input Form Section */}
                    <div className="bg-white/80 backdrop-blur-lg p-6 md:p-8 rounded-3xl shadow-xl border border-white/20 md:w-2/5 min-h-[700px] flex flex-col">
                        <TitleSection />

                        <div className="flex-1 space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-gray-800">Budget Range</h3>
                                <div className="flex gap-4">
                                    <PriceTier label="Low" isSelected={budgetRange === 'Low'} onClick={() => setBudgetRange('Low')} />
                                    <PriceTier label="Medium" isSelected={budgetRange === 'Medium'} onClick={() => setBudgetRange('Medium')} />
                                    <PriceTier label="High" isSelected={budgetRange === 'High'} onClick={() => setBudgetRange('High')} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-gray-800">Trip Duration</h3>
                                <div className="flex gap-4">
                                    <DurationPill days={3} isSelected={days === 3} onClick={() => setDays(3)} />
                                    <DurationPill days={5} isSelected={days === 5} onClick={() => setDays(5)} />
                                    <DurationPill days={7} isSelected={days === 7} onClick={() => setDays(7)} />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="block text-lg font-semibold text-gray-800 mb-3">Number of Travelers</label>
                                <div className="flex items-center gap-4">
                                    <Users className="text-gray-500 w-6 h-6"/>
                                    <input 
                                        type="range"
                                        min="1"
                                        max="10"
                                        value={people}
                                        onChange={(e) => setPeople(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                    />
                                    <span className="font-bold text-lg text-gray-700">{people}</span>
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="block text-lg font-semibold text-gray-800 mb-3">Start Date</label>
                                <div className="relative">
                                    <input 
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Your Interests</h3>
                                <div className="flex flex-wrap gap-2">
                                    {interests.map(interest => (
                                        <InterestPill
                                            key={interest}
                                            name={interest}
                                            isSelected={selectedInterests.includes(interest)}
                                            onClick={() => handleInterestToggle(interest)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                onClick={generatePlan}
                                disabled={loading}
                                className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-emerald-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300"
                            >
                                {loading ? 'Crafting Your Itinerary...' : 'Generate AI Itinerary'}
                                <ArrowRight className="w-5 h-5 ml-2"/>
                            </button>
                        </div>
                    </div>

                    {/* Output Display Section */}
                    <div className="bg-white/80 backdrop-blur-lg p-6 md:p-8 rounded-3xl shadow-xl border border-white/20 md:w-3/5 min-h-[700px] flex flex-col">
                        <div className="text-center md:text-left mb-6">
                            <h2 className="text-3xl font-bold text-gray-800">Your AI-Generated Itinerary</h2>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {loading && <LoadingSpinner />}
                            {error && <ErrorDisplay message={error} />}
                            {plan && <PlanDisplay plan={plan} />}
                            {!loading && !error && !plan && (
                                <div className="bg-white/50 p-8 rounded-2xl text-center flex flex-col items-center justify-center h-full border border-gray-200">
                                    <Compass className="w-16 h-16 text-emerald-500 mb-4 animate-pulse"/>
                                    <h3 className="text-xl font-bold text-gray-700 mb-2">Craft your personalized Jharkhand travel plan</h3>
                                    <p className="text-gray-500 text-sm max-w-sm">Fill out your preferences on the left and click "Generate AI Itinerary" to see your custom travel plan appear here.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ItineraryPlanner;
