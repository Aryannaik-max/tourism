const CrudService = require('./crudService');

class PostService extends CrudService {
    constructor() {
        super('Posts');
    }
}

module.exports = PostService;