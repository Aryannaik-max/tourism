const CrudService = require('./crudService');

class NormalUserSerivce extends CrudService {
    constructor() {
        super('Normal_User');
    }   
}

module.exports = NormalUserSerivce;