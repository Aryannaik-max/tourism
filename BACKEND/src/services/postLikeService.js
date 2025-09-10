const CrudService = require('./crudService');

class PostLikeService extends CrudService {
    constructor() {
        super('Post_Like');
    }   
}
module.exports = PostLikeService;