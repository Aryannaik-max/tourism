const CrudService = require('./crudService');

class CommentService extends CrudService {
    constructor() {
        super('Comments');
    }
}
    
module.exports = CommentService;