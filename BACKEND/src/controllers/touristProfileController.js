const UserService = require('../services/userService')
const baseCreateUser = require('./userController');
const userService = new UserService();

const createTourist = async (req, res) => {
  // Set role in request body
  req.body.role = "tourist";

  // Map the fields correctly
  const profileData = {
    name: req.body.name || req.body.full_name,
    email: req.body.email,
    phone_number: req.body.phone_number || req.body.phone, 
    preferred_destinations: req.body.preferred_destinations || null,
    interest: req.body.interest,
    nationality: req.body.nationality,
    preferred_language: req.body.preferred_language || 'en'
  };

  console.log('Tourist profile data:', profileData); 

  return baseCreateUser.createUser(req, res, profileData);
};

const getTourist = async (req, res) => {
    try {
        const tourist = await userService.read(req.params.id);
        if(tourist) {
            res.status(200).json({
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
        const tourist = await userService.update(req.params.id, req.body);
        if(tourist) {
            res.status(200).json({
                data: tourist,
                success: true,
                message: 'tourist updated successfully',
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
            message: 'Error while updating tourist',
            err: error
        });
    }
}

const deleteTourist = async (req, res) => {
    try {
        const tourist = await userService.delete(req.params.id);
        if(tourist) {
            res.status(200).json({
                data: tourist,
                success: true,
                message: 'tourist deleted successfully',
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
            message: 'Error while deleting tourist',
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