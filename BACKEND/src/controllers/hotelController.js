const HotelService = require('../services/hotelService');
const hotelService = new HotelService();

const createHotel = async (req, res) => {
    try {
        const hotel = await hotelService.create(req.body);
        res.status(201).json({
            data: hotel,
            success: true,
            message: 'successfully created hotel',
            err: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while creating hotel',
            err: error
        });
    }
}

const getHotel = async (req, res) => {
    try {
        const hotel = await hotelService.read(req.params.id);
        if(hotel) {
            res.status(201).json({
                data: hotel,
                success: true,
                message: 'hotel fetched successfully',
                err: {}
            });
        }else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'hotel not found',
                err: {}
            });
        }
    } catch (error) {
       console.log(error);
       res.status(500).json({
        data: {},
        success: false,
        message: 'Error while fetching hotel',
        err: error
       }) 
    }
}

const updateHotel = async (req, res) => {
    try {
        const hotel = await hotelService.update(req.params.id, req.body);
        if(hotel) {
            res.status(201).json({
                data: hotel,
                success: true,
                message: 'hotel updated successfully',
                err: {}
            });
        }else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'hotel not found',
                err: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while updating hotel',
            err: error
        });
    }
}

const deleteHotel = async (req, res) => {
    try {
        const hotel = await hotelService.delete(req.params.id);
        if(hotel) {
            res.status(201).json({
                data: hotel,
                success: true,
                message: 'hotel deleted successfully',
                err: {}
            });
        }
        else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'hotel not found',
                err: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while deleting hotel',
            err: error
        });
    }
}

module.exports = {
    createHotel,
    getHotel,
    updateHotel,
    deleteHotel
}