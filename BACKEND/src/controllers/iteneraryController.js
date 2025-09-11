const ItineraryService = require('../services/iteneraryService');
const itineraryService = new ItineraryService();

const createItinerary = async (req, res) => {
    try {
        const { title, description, duration, activities, accommodations, transportation, budget, userId } = req.body;
        const itineraryData = {
            title,
            description,
            duration,      
            activities: activities || [],
            accommodations: accommodations || [],
            transportation: transportation || [],
            budget,
            user_id: userId
        };
        const newItinerary = await itineraryService.create(itineraryData);
        res.status(201).json({
            data: newItinerary,
            success: true,
            message: 'Itinerary created successfully',
            err: {}
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to create itenerary',
            err: error
        });
    }
}

const getItinerary = async (req, res) => {
    try {
        const itineraryId = req.params.id;
        const itinerary = await itineraryService.read(itineraryId);
        res.status(200).json({
            data: itinerary,
            success: true,
            message: 'Itinerary fetched successfully',
            err: {}
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to fetch itinerary',
            err: error
        });
    }
}

const deleteItinerary = async (req, res) => {
    try {
        const itineraryId = req.params.id;
        await itineraryService.delete(itineraryId);
        res.status(200).json({
            data: {},
            success: true,
            message: 'Itinerary deleted successfully',
            err: {}
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to delete itinerary',
            err: error
        });
    }
};


module.exports = {
    createItinerary,
    getItinerary,
    deleteItinerary
};
