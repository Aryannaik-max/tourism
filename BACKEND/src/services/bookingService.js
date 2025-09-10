const CrudService = require('./crudService');

class BookingService extends CrudService {
    constructor() {
        super('Bookings');
    }
}
    
module.exports = BookingService;