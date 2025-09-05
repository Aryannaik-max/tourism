const NormalUserService = require('../services/normalUserService');
const normalUserService = new NormalUserService();

const createNormalUser = async (req, res) => {
    try {   
        const normalUser = await normalUserService.create(req.body);
        res.status(201).json({
            data: normalUser,
            success: true,
            message: 'successfully created normal user',
            err: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while creating normal user',
            err: error
        });
    }
}

const getNormalUser = async (req, res) => {
    try {
        const normalUser = await normalUserService.read(req.params.id);
        if(normalUser) {
            res.status(201).json({
                data: normalUser,
                success: true,
                message: 'normal user fetched successfully',
                err: {}
            });
        }
        else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'normal user not found',
                err: {}
            });
        }
    } catch (error) {   
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while fetching normal user',
            err: error
        });
    }
}

const updateNormalUser = async (req, res) => {
    try {
        const normalUser = await normalUserService.update(req.params.id, req.body);
        if(normalUser) {
            res.status(201).json({
                data: normalUser,
                success: true,
                message: 'normal user updated successfully',
                err: {}
            });
        }
        else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'normal user not found',
                err: {}
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error while updating normal user',
            err: error
        });
    }
}

const deleteNormalUser = async (req, res) => {
    try {
        const normalUser = await normalUserService.delete(req.params.id);
        if(normalUser) {
            res.status(201).json({
                data: normalUser,
                success: true,
                message: 'normal user deleted successfully',
                err: {}
            });
        }
        else {
            res.status(404).json({
                data: {},
                success: false,
                message: 'normal user not found',
                err: {}
            });
        } 
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            data: {},
            success: false,
            message: 'Error while deleting normal user',
            err: error
        });
    }
}

module.exports = {
    createNormalUser,
    getNormalUser,
    updateNormalUser,
    deleteNormalUser
}
