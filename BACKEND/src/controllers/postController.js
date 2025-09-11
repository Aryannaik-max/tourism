const PostService = require('../services/postService');
const postService = new PostService();

const createPost = async (req, res) => {
    try {
        const post = await postService.create(req.body);    
        res.status(201).json({
            data: post,
            success: true,
            message: 'successfully created post',
            err: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while creating post',
            err: error
        });
    }
}

const getPost = async (req, res) => {
    try {
        const post = await postService.read(req.params.id);
        if(post) {
            res.status(201).json({
                data: post,
                success: true,
                message: 'post fetched successfully',
                err: {}
            });
        }
        else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'post not found',
                err: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while fetching post',
            err: error
        });
    }
}

const updatePost = async (req, res) => {
    try {
        const post = await postService.update(req.params.id, req.body);
        if(post) {
            res.status(201).json({
                data: post,
                success: true,
                message: 'post updated successfully',
                err: {}
            });
        }
        else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'post not found',
                err: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while updating post',
            err: error
        });
    }
}

const deletePost = async (req, res) => {
    try {
        const post = await postService.delete(req.params.id);
        if(post) {
            res.status(201).json({
                data: post,
                success: true,
                message: 'post deleted successfully',
                err: {}
            });
        }
        else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'post not found',
                err: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while deleting post',
            err: error
        });
    }
}

module.exports = {
    createPost,
    getPost,
    updatePost,
    deletePost
}