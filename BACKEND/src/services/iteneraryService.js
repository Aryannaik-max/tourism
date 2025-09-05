const CrudService = require('./crudService');   

class IteneraryService extends CrudService {
    constructor() {
        super('Iteneraries');
    }
}

module.exports = IteneraryService;