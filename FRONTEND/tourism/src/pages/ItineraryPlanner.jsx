import { useState } from 'react'
import PageTitle from '../components/PageTitle'
import PlanDisplay from '../components/PlanDisplay';
import InputField from '../components/InputField'
import LocationCheckbox from '../components/LocationCheckbox'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorDisplay from '../components/ErrorDisplay'

const ItineraryPlanner = () => {
    const [people, setPeople] = useState(2);
    const [days, setDays] = useState(3);
    const [budget, setBudget] = useState(15000);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const jharkhandLocations = [
        { id: 'hundru_falls', name: 'Hundru Falls', description: 'Ranchi - A spectacular 320 ft waterfall.' },
        { id: 'patratu_valley', name: 'Patratu Valley', description: 'Ramgarh - Scenic hairpin bends and a dam.' },
        { id: 'baidyanath_temple', name: 'Baidyanath Temple', description: 'Deoghar - A revered Jyotirlinga shrine.' },
        { id: 'parasnath_hills', name: 'Parasnath Hills', description: 'Giridih - The highest peak, a major Jain pilgrimage site.' },
        { id: 'dalma_sanctuary', name: 'Dalma Wildlife Sanctuary', description: 'Jamshedpur - Home to elephants and diverse fauna.' },
        { id: 'netarhat', name: 'Netarhat', description: 'Latehar - "Queen of Chotanagpur", known for its sunrise/sunset views.' },
        { id: 'dassam_falls', name: 'Dassam Falls', description: 'Ranchi - A beautiful natural cascade.' },
        { id: 'jubilee_park', name: 'Jubilee Park', description: 'Jamshedpur - A Mughal Garden-inspired park with a zoo.' },
    ];

    const handleLocationChange = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            setSelectedLocations(prev => [...prev, name]);
        } else {
            setSelectedLocations(prev => prev.filter(loc => loc !== name));
        }
    };

    const generatePlan = async () => {
        if (selectedLocations.length === 0) {
            setError("Please select at least one location to visit.");
            return;
        }

        setLoading(true);
        setError(null);
        setPlan(null);

        try {
            const apiKey = ``;
        } catch (err) {
            console.error(err);
            setError(err.message || "An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    const CalendarDaysIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>;
    const IndianRupeeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee-icon lucide-indian-rupee"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>

  return (
    <div className="min-h-screen bg-teal-50/50 font-sans p-4 sm:p-6 lg:p-8">
        <main className="max-w-4xl mx-auto">
            <PageTitle />

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <InputField 
                        icon={<UsersIcon />}
                        label="Number of People"
                        id="people"
                        value={people}
                        onChange={(e) => setPeople(Math.max(1, e.target.value))}
                    />
                    <InputField 
                        icon={<CalendarDaysIcon />}
                        label="Number of Days"
                        id="days"
                        value={days}
                        onChange={(e) => setDays(Math.max(1, e.target.value))}
                    />
                    <InputField 
                        icon={<IndianRupeeIcon />}
                        label="Total Budget (INR)"
                        id="budget"
                        value={budget}
                        onChange={(e) => setBudget(Math.max(1000, e.target.value))}
                        placeholder="e.g., 20000"
                        min={1000}
                    />
                </div>
                
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Choose Your Destinations</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                        {jharkhandLocations.map(loc => (
                            <LocationCheckbox
                                key={loc.id}
                                id={loc.id}
                                name={loc.name}
                                description={loc.description}
                                checked={selectedLocations.includes(loc.name)}
                                onChange={handleLocationChange}
                            />
                        ))}
                    </div>
                </div>
                
                <div className="text-center">
                    <button 
                        onClick={generatePlan}
                        disabled={loading}
                        className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300"
                    >
                        {loading ? 'Crafting Your Plan...' : 'Generate Itinerary'}
                    </button>
                </div>
            </div>
            
            <div className="mt-8">
                {loading && <LoadingSpinner />}
                {error && <ErrorDisplay message={error} />}
                {plan && <PlanDisplay plan={plan} />}
            </div>
        </main>
    </div>
  )
}

export default ItineraryPlanner