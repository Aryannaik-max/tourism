const baseCreateUser = require('./userController');

const createVendor = async (req, res) => {
  try {
    req.body.role = "vendor"; 

    const profileData = {
      role: "vendor",
      craft_specialization: req.body.craft_specialization,
      workshop_location: req.body.workshop_location, 
      workshop_address: req.body.workshop_address,
      artisan_certification_url: req.body.artisan_certification_url,
      identity_proof_url: req.body.identity_proof_url,
      total_products: req.body.total_products || 0,
      total_orders: req.body.total_orders || 0,
      rating: req.body.rating || 0
    };

    return baseCreateUser.createUser(req, res, profileData);
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      message: "Failed to create vendor",
      err: error.message
    });
  }
};


const getVendor = async (req, res) => {
    try {
        const vendor = await userService.read(req.params.id);
        if(vendor) {
            res.status(201).json({
                data: vendor,
                success: true,
                message: 'vendor fetched successfully',
                err: {}
            });
        } else {   
            res.status(404).json({
                data: {},
                success: false,
                message: 'vendor not found',
                err: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while fetching vendor ',
            err: error
        });
    }

}

const updateVendor = async (req, res) => {
    try {
        const vendor = await userService.update(req.params.id, req.body);
        if(vendor) {
            res.status(201).json({
                data: vendor,
                success: true,
                message: 'vendor updated successfully',
                err: {}
            });
        } else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'vendor not found',
                err: {}
            });
        }
     } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while updating vendor',
            err: error
        });
    }
}

const deleteVendor = async (req, res) => {
  try {
    const vendorId = req.params.id;
    await userService.delete(vendorId);
    res.status(200).json({
        data: {},
        success: true,
        message: 'Vendor deleted successfully',
        err: {}
    });
  } catch (error) {
    res.status(500).json({ 
        data: {},   
        success: false,
        message: 'Failed to delete vendor',
        err: error
        });
    }
};

module.exports = {
  createVendor,
  getVendor,
  updateVendor,
    deleteVendor
};
