const CommentLikeService = require('../services/commentLikeService');
const commentLikeService = new CommentLikeService();


const createCommentLike = async (req, res) =>{
        try {
            const commentLikeData = req.body;
            const newCommentLike = await commentLikeService.create(commentLikeData);
            res.status(201).json({
                data: newCommentLike,
                success: true,
                message: 'Comment Like created successfully',
                err: {}
            });
        }
        catch (error) { 
            res.status(500).json({
                data: {},
                success: false,
                message: 'Failed to create comment like',
                err: error
            });
        }
    }   

const getCommentLike = async (req, res) =>{
        try {
            const commentLikeId = req.params.id;
            const commentLike = await commentLikeService.read(commentLikeId);
            if (commentLike) {
                res.status(200).json({      
                    data: commentLike,
                    success: true,
                    message: 'Comment Like retrieved successfully',
                    err: {}
                });
            } else {
                res.status(404).json({ 
                    data: {},
                    success: false,
                    message: 'Comment Like not found',
                    err: {}
                 });
            }
        } catch (error) {
            res.status(500).json({
                data: {},
                success: false,
                message: 'Failed to retrieve comment like',
                err: error
            });
        }
    }

const updateCommentLike = async (req, res) => {
        try {
            const commentLikeId = req.params.id;
            const commentLikeData = req.body;
            const updatedCommentLike = await commentLikeService.update(commentLikeId, commentLikeData);
            if (updatedCommentLike) {
                res.status(200).json({
                    data: updatedCommentLike,
                    success: true,
                    message: 'Comment Like updated successfully',
                    err: {}
                });
            } else {
                res.status(404).json({
                    data: {},
                    success: false,
                    message: 'Comment Like not found',  
                    err: {}
                });
            }
        } catch (error) {
            res.status(500).json({
                data: {},
                success: false,
                message: 'Failed to update comment like',
                err: error
            });
        }
    }

const deleteCommentLike = async (req, res) => {
        try {
            const commentLikeId = req.params.id;
            const deletedCommentLike = await commentLikeService.delete(commentLikeId);
            if (deletedCommentLike) {
                res.status(200).json({
                    data: deletedCommentLike,
                    success: true,  
                    message: 'Comment Like deleted successfully',
                    err: {}
                });
            } else {
                res.status(404).json({ 
                    data: {},
                    success: false,
                    message: 'Comment Like not found',
                    err: {}
                 });
            }
        } catch (error) {
            res.status(500).json({
                data: {},
                success: false,
                message: 'Failed to delete comment like',
                err: error
            });
        }
    }


module.exports = {
    createCommentLike,
    getCommentLike,
    updateCommentLike,
    deleteCommentLike
};