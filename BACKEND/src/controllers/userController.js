const UserService = require('../services/userService');
const userServcie = new UserService();
const { Clerk } = require('@clerk/clerk-sdk-node');
const clerkClient = Clerk({ apiKey: process.env.CLERK_SECRET_KEY });

const createUser = async (req, res) => {
  try {
    const { email, full_name, phone, password } = req.body;
        const profileData = {
            travel_style: req.body.travel_style,
            interests: req.body.interests || [],
            budget_range: req.body.budget_range,
            preferred_language: req.body.preferred_language || 'en',
            date_of_birth: req.body.date_of_birth,
            nationality: req.body.nationality,
            accessibility_needs: req.body.accessibility_needs || [],
            dietary_restrictions: req.body.dietary_restrictions || []
        };

    const clerkUser = await clerkClient.users.createUser({
      emailAddress: [email],
      password,
      firstName: full_name,
      publicMetadata: { role: role || "tourist" } 
    });

    const newUser = await userService.createUser(
      {
        email,
        full_name,
        phone,
        clerk_id: clerkUser.id, 
        user_type: role || "tourist"
      },
      profileData
    );
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
