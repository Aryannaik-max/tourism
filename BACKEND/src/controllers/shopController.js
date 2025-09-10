const ShopService = require('../services/shopService');
const shopService = new ShopService();

const createShop = async (req, res) => {
    try {
        const { name, location, description, userId } = req.body;   
        const shopData = {
            name,
            location,
            description,
            user_id: userId
        };
        const newShop = await shopService.create(shopData);
        res.status(201).json({
            data: newShop,
            success: true,
            message: 'Shop created successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error creating shop:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to create shop',
            err: error
        });
    }
}

const getShop = async (req, res) => {
    try {
        const shopId = req.params.id;
        const shop = await shopService.read(shopId);
        res.status(200).json({
            data: shop,
            success: true,
            message: 'Shop fetched successfully',
            err: {}
        });
    } catch (error) {
        console.error('Error fetching shop:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to fetch shop',
            err: error
        });
    }
}

const deleteShop = async (req, res) => {
    try {
        const shopId = req.params.id;
        await shopService.delete(shopId);
        res.status(200).json({
            data: {},
            success: true,
            message: 'Shop deleted successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error deleting shop:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to delete shop',
            err: error
        });
    }
};

module.exports = {
    createShop,
    getShop,
    deleteShop
};