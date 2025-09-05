const UserService = require('../services/userService');
const userServcie = new UserService();

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await userServcie.createUser(userData);
    res.status(201).json({
        data: newUser,
        success: true,
        message: 'User created successfully',
        err: {}
    });
  } catch (error) {
    res.status(500).json({ 
        data: {},
        success: false, 
        message: 'Failed to create user', 
        err: error
     });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;   
    const user = await userServcie.getUserById(userId); 
    res.status(200).json({
        data: user,
        success: true,
        message: 'User fetched successfully',
        err: {}
    });
  } catch (error) {
    res.status(500).json({ 
        data: {},
        success: false, 
        message: 'Failed to fetch user', 
        err: error
     });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await userServcie.deleteUserById(userId);
    res.status(200).json({
        data: {},
        success: true,
        message: 'User deleted successfully',
        err: {}
    });
  } catch (error) {
    res.status(500).json({ 
        data: {},
        success: false,
        message: 'Failed to delete user',
        err: error
        });
    }
};

module.exports = {
  createUser,
  getUser,
  deleteUser
};
