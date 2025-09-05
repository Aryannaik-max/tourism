const IteneraryService = require('../services/iteneraryService');
const iteneraryService = new IteneraryService();

const createItenerary = async (req, res) => {
    try {
        const { title, description, duration, activities, accommodations, transportation, budget, userId } = req.body;
        const iteneraryData = {
            title,
            description,
            duration,      
            activities: activities || [],
            accommodations: accommodations || [],
            transportation: transportation || [],
            budget,
            user_id: userId
        };
        const newItenerary = await iteneraryService.create(iteneraryData);
        res.status(201).json({
            data: newItenerary,
            success: true,
            message: 'Itenerary created successfully',
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

const getItenerary = async (req, res) => {
    try {
        const iteneraryId = req.params.id;
        const itenerary = await iteneraryService.read(iteneraryId);
        res.status(200).json({
            data: itenerary,
            success: true,
            message: 'Itenerary fetched successfully',
            err: {}
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to fetch itenerary',
            err: error
        });
    }
}

const deleteItenerary = async (req, res) => {
    try {
        const iteneraryId = req.params.id;
        await iteneraryService.delete(iteneraryId);
        res.status(200).json({
            data: {},
            success: true,
            message: 'Itenerary deleted successfully',
            err: {}
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to delete itenerary',
            err: error
        });
    }
};


module.exports = {
    createItenerary,
    getItenerary,
    deleteItenerary
};
