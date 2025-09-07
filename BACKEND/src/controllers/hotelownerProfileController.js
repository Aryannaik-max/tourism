const baseCreateUser = require('./userController');

const createHotelOwner = async (req, res) => {
    const profileData = {
        business_name: req.body.business_name || '',
        pan_number: req.body.pan_number || '',
        gst_number: req.body.gst_number || '',
        bussiness_number: req.body.bussiness_number || '',
        business_email: req.body.business_email || '',
        business_address: req.body.address || '',
        business_license_url: req.body.business_license_url || '',
        pan_card_url: req.body.pan_card_url || '',
        property_document_url: req.body.property_document_url || '',
    }
    return baseCreateUser.createUser(req, res, profileData);
}

const getHotelOwner = async (req, res) => {
    try {
        const hotelOwner = await hotelOwnerService.read(req.params.id); 
        if(hotelOwner) {
            res.status(201).json({
                data: hotelOwner,
                success: true,
                message: 'hotel owner fetched successfully',
                err: {}
            });
        } else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'hotel owner not found',
                err: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while fetching hotel owner',
            err: error
        });
    }
}

const updateHotelOwner = async (req, res) => {
    try {
        const hotelOwner = await hotelOwnerService.update(req.params.id, req.body);
        if(hotelOwner) {
            res.status(201).json({
                data: hotelOwner,
                success: true,
                message: 'hotel owner updated successfully',
                err: {}
            });
        } else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'hotel owner not found',
                err: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while updating hotel owner',
            err: error
        });
    }
}

const deleteHotelOwner = async (req, res) => {
    try {
        const hotelOwner = await hotelOwnerService.delete(req.params.id);
        if(hotelOwner) {
            res.status(201).json({
                data: hotelOwner,
                success: true,
                message: 'hotel owner deleted successfully',
                err: {}
            });
        } else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'hotel owner not found',
                err: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while deleting hotel owner',
            err: error
        });
    }
}

module.exports = {
    createHotelOwner,
    getHotelOwner,
    updateHotelOwner,
    deleteHotelOwner
}
