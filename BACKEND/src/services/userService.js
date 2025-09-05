const CrudService = require('./crudService');

class UserService extends CrudService {
    constructor() {
        super('Users');
    }
}

module.exports = UserService;