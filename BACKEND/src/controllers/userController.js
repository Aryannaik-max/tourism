const UserService = require('../services/userService');
const userService = new UserService();
const { Clerk } = require('@clerk/clerk-sdk-node');
const clerkClient = Clerk({ apiKey: process.env.CLERK_SECRET_KEY });

const createUser = async (req, res, profileData) => {
  try {
    const { email, full_name, phone, password, role } = req.body;



    const clerkUser = await clerkClient.users.createUser({
      emailAddress: [email],
      password,
      firstName: full_name,
      publicMetadata: { role } 
    });

    const newUser = await userService.createUser(
      {
        email,
        full_name,
        phone,
        clerk_id: clerkUser.id,
        user_type: role
      },
      profileData
    );

    if (!newUser) {
      return res.status(400).json({
        success: false,
        message: "Failed to create Supabase user",
        err: {}
      });
    }

    res.status(201).json({
      data: newUser,
      success: true,
      message: "User created successfully",
      err: {}
    });

  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      message: "Failed to create user",
      err: error.message
    });
  }
};


const getUser = async (req, res) => {
  try {
    const userId = req.params.id;   
    const user = await userService.getUserById(userId); 
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
