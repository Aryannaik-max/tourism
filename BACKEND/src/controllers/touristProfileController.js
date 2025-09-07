const UserService = require('../services/userService')
const baseCreateUser = require('./userController');
const userService = new UserService();

const createTourist = async (req, res) => {
  req.body.role = "tourist";

  const profileData = {
    role: "tourist",
    travel_style: req.body.travel_style,
    interests: req.body.interests || [],
    budget_range: req.body.budget_range,
    preferred_language: req.body.preferred_language || 'en',
    date_of_birth: req.body.date_of_birth,
    nationality: req.body.nationality,
    accessibility_needs: req.body.accessibility_needs || [],
    dietary_restrictions: req.body.dietary_restrictions || []
  };

  return baseCreateUser.createUser(req, res, profileData);
};

const getTourist = async (req, res) => {
    try {
        const tourist = await userService.read(req.params.id);
        if(tourist) {
            res.status(201).json({
                data: tourist,
                success: true,
                message: 'tourist fetched successfully',
                err: {}
            });
        }
        else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'tourist not found',
                err: {}
            });
        }
    } catch (error) {   
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while fetching tourist ',
            err: error
        });
    }
}

const updateTourist = async (req, res) => {
    try {
        const normalUser = await normalUserService.update(req.params.id, req.body);
        if(normalUser) {
            res.status(201).json({
                data: normalUser,
                success: true,
                message: 'normal user updated successfully',
                err: {}
            });
        }
        else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'normal user not found',
                err: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while updating normal user',
            err: error
        });
    }
}

const deleteTourist = async (req, res) => {
    try {
        const normalUser = await normalUserService.delete(req.params.id);
        if(normalUser) {
            res.status(201).json({
                data: normalUser,
                success: true,
                message: 'normal user deleted successfully',
                err: {}
            });
        }
        else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'normal user not found',
                err: {}
            });
        } 
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            data: {},
            success: false,
            message: 'Error while deleting normal user',
            err: error
        });
    }
}

module.exports = {
    createTourist,
    getTourist,
    updateTourist,
    deleteTourist
}
