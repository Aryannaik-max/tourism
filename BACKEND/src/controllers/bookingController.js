const BookingService = require('../services/bookingService');
const bookingService = new BookingService();

createBooking = async (req, res) => {
    try {
        const bookingData = req.body;
        const newBooking = await bookingService.create(bookingData);
        res.status(201).json({
            data: newBooking,
            success: true,
            message: 'Booking created successfully',
            err: {}
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to create booking',
            err: error
        });
    }
};

getBooking = async (req, res) => {
    try {
        const bookingId = req.params.id;
        const booking = await bookingService.read(bookingId);
        if (booking) {
            res.status(200).json({
                data: booking,
                success: true,
                message: 'Booking retrieved successfully',
                err: {}
            });
        } else {
            res.status(404).json({ 
                data: {},
                success: false,
                message: 'Booking not found',
                err: {}
             });
        }
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to retrieve booking',
            err: error
        });
    }
};

updateBooking = async (req, res) => {
    try {
        const bookingId = req.params.id;    
        const bookingData = req.body;
        const updatedBooking = await bookingService.update(bookingId, bookingData);
        if (updatedBooking) {
            res.status(200).json({
                data: updatedBooking,
                success: true,
                message: 'Booking updated successfully',
                err: {}
            });
        } else {
            res.status(404).json({ error: 'Booking not found' });
        }
    } catch (error) {
        res.status(500).json({ 
            data: {},
            success: false,
            message: 'Failed to update booking',
            err: error
         });
    }
};

deleteBooking = async (req, res) => {
    try {
        const bookingId = req.params.id;
        const deletedBooking = await bookingService.delete(bookingId);
        if (deletedBooking) {
            res.status(200).json({
                data: deletedBooking,
                success: true,
                message: 'Booking deleted successfully',
                err: {}
            });
        } else {
            res.status(404).json({ error: 'Booking not found' });
        }
    } catch (error) {
        res.status(500).json({ 
            data: {},
            success: false,
            message: 'Failed to delete booking',
            err: error
         });
    }
};


module.exports = {
    createBooking,
    getBooking,
    updateBooking,
    deleteBooking
}