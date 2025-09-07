const baseCreateUser = require('./userController');

const createGuide = async (req, res) => {
    try {
        const profileData = {
            languages_spoken: req.body.languages_spoken || [],
            certifications: req.body.certifications || [],
            areas_of_expertise: req.body.areas_of_expertise || [],
            availability: req.body.availability || [],
            hourly_rate: req.body.hourly_rate || 0,
            reviews: req.body.reviews || [],
            bio: req.body.bio || '',
            profile_picture: req.body.profile_picture || '',
            social_media_links: req.body.social_media_links || {}
        };
        return baseCreateUser.createUser(req, res, profileData);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to create guide',
            err: error.message
        });
    }
}

const getGuide = async (req, res) => {
    try {
        const guide = await guideService.read(req.params.id);
        if(guide) {
            res.status(201).json({
                data: guide,
                success: true,
                message: 'guide fetched successfully',
                err: {}
            });
        } else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'guide not found',
                err: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while fetching guide',
            err: error
        });
    }
}

const updateGuide = async (req, res) => {
    try {
        const guide = await guideService.update(req.params.id, req.body);
        if(guide) {
            res.status(201).json({
                data: guide,
                success: true,
                message: 'guide updated successfully',
                err: {}
            });
        } else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'guide not found',
                err: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while updating guide',
            err: error
        });
    }
}

const deleteGuide = async (req, res) => {
    try {
        const guide = await guideService.delete(req.params.id);
        if(guide) {
            res.status(201).json({
                data: guide,
                success: true,
                message: 'guide deleted successfully',
                err: {}
            });
        } else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'guide not found',
                err: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while deleting guide',
            err: error
        });
    }   
};

module.exports = {
    createGuide,
    getGuide,
    updateGuide,
    deleteGuide
}