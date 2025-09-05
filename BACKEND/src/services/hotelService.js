const CrudService = require('./crudService');

class HotelService extends CrudService {
    constructor() {
        super('Hotels');
    }
}

module.exports = HotelService;