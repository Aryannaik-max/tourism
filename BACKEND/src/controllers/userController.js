const { Clerk } = require('@clerk/clerk-sdk-node');
const UserService = require('../services/userService');
const userService = new UserService();

const clerkClient = new Clerk({
  secretKey: process.env.CLERK_SECRET_KEY,
});

const createUser = async (req, res, profileData) => {
  try {
    const { email, full_name, phone, password, role } = req.body;

    if (!email || !full_name || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
        err: {}
      });
    }

    const nameParts = full_name.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

    const payload = {
      emailAddress: [email],       // ✅ must be array
      password,
      firstName,
      lastName,
      ...(phone ? { phoneNumbers: [phone] } : {}), // ✅ must be array
      publicMetadata: { role }
    };

    console.log("Payload sent to Clerk:", payload);

    const clerkUser = await clerkClient.users.createUser(payload);

    const newUser = await userService.createUser(
      {
        email,
        role, // 'tourist' | 'guide' | 'hotel_owner'
        clerk_user_id: clerkUser.id
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
    console.error("Error creating user:", error);
    res.status(error.status || 500).json({
      data: {},
      success: false,
      message: "Failed to create user",
      err: error.errors || error.message
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
