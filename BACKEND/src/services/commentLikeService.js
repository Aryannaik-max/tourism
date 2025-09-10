const CrudService = require('./crudService');

class CommentLikeService extends CrudService {
    constructor() {
        super('Comment_Like');
    }
}

module.exports = CommentLikeService;