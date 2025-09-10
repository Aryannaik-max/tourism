const CrudService = require('./crudService');

class ShopService extends CrudService {
    constructor() {
        super('Shops');
    }
}

module.exports = ShopService;
