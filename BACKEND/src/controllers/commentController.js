const CommentService = require('../services/commentService');
const commentService = new CommentService();

const createComment = async (req, res) => {
        try {
            const commentData = req.body;
            const newComment = await commentService.create(commentData);
            res.status(201).json({
                data: newComment,
                success: true,
                message: 'Comment created successfully',
                err: {}
            });
        } catch (error) {
            res.status(500).json({
                data: {},
                success: false,
                message: 'Failed to create comment',
                err: error
            });
        }
    }

const getComment = async (req, res) => {
        try {
            const commentId = req.params.id;
            const comment = await commentService.read(commentId);
            if (comment) {
                res.status(200).json({
                    data: comment,
                    success: true,
                    message: 'Comment retrieved successfully',
                    err: {}
                });
            } else {
                res.status(404).json({ 
                    data: {},
                    success: false,
                    message: 'Comment not found',
                    err: {}
                 });
            }
        } catch (error) {
            res.status(500).json({
                data: {},
                success: false,
                message: 'Failed to retrieve comment',
                err: error
            });
        }
    }

const updateComment = async (req, res) => {
        try {
            const commentId = req.params.id;
            const commentData = req.body;
            const updatedComment = await commentService.update(commentId, commentData);
            if (updatedComment) {
                res.status(200).json({
                    data: updatedComment,
                    success: true,
                    message: 'Comment updated successfully',
                    err: {}
                });
            } else {
                res.status(404).json({
                    data: {},
                    success: false,
                    message: 'Comment not found',
                    err: {}
                });
            }
        } catch (error) {
            res.status(500).json({
                data: {},
                success: false,
                message: 'Failed to update comment',
                err: error
            });
        }
    }

const deleteComment = async (req, res) => {
        try {
            const commentId = req.params.id;
            const deletedComment = await commentService.delete(commentId);
            if (deletedComment) {
                res.status(200).json({
                    data: deletedComment,
                    success: true,
                    message: 'Comment deleted successfully',
                    err: {}
                });
            }
            else {
                res.status(404).json({
                    data: {},
                    success: false,
                    message: 'Comment not found',
                    err: {}
                });
            }
        } catch (error) {
            res.status(500).json({
                data: {},
                success: false,
                message: 'Failed to delete comment',
                err: error
            });
        }
    }


module.exports = {
    createComment,
    getComment,
    updateComment,
    deleteComment
};