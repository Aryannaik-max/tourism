const PostLikeService = require('../services/postLikeService');
const postLikeService = new PostLikeService();

const createPostLike = async (req, res) => {
    try {
        const postLike = await postLikeService.create(req.body);
        res.status(201).json({
            data: postLike,
            success: true,
            message: 'successfully created post like',
            err: {}
        });
    } catch (error) {
        console.log(error); 
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while creating post like',
            err: error
        });
    }   
}

const getPostLike = async (req, res) => {
    try {
        const postLike = await postLikeService.read(req.params.id);
        if(postLike) {
            res.status(201).json({
                data: postLike,
                success: true,
                message: 'post like fetched successfully',
                err: {}
            });
        } else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'post like not found',
                err: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while fetching post like',
            err: error
        });
    }
}

const updatePostLike = async (req, res) => {
    try {
        const postLike = await postLikeService.update(req.params.id, req.body);
        if(postLike) {
            res.status(201).json({
                data: postLike,
                success: true,
                message: 'post like updated successfully',
                err: {}
            });
        } else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'post like not found',
                err: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while updating post like',
            err: error
        });
    }
}

const deletePostLike = async (req, res) => {
    try {
        const postLike = await postLikeService.delete(req.params.id);
        if(postLike) {
            res.status(201).json({
                data: postLike,
                success: true,
                message: 'post like deleted successfully',
                err: {}
            });
        } else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'post like not found',
                err: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while deleting post like',
            err: error
        });
    }
}

module.exports = {
    createPostLike,
    getPostLike,
    updatePostLike,
    deletePostLike
}