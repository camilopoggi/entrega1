const express = require('express');
const router = express.Router();
const CartManager = require('../CartManager');
const cartManager = new CartManager('carts.json');


router.post('/', async (req, res) => { 
    try {
        const newCart = await cartManager.createCart(); 
        res.status(201).json(newCart);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el carrito' });
    }
});

router.get('/:cid', async (req, res) => {  
    try {
        const cart = await cartManager.getCartById(parseInt(req.params.cid));
        if (!cart) {
            return res.status(404).json({ error: 'Carrito no encontrado' });
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el carrito' });
    }
});

router.post('/:cid/product/:pid', async (req, res) => {  
    try {
        const cart = await cartManager.addProductToCart(parseInt(req.params.cid), parseInt(req.params.pid));
        if (!cart) {
            return res.status(404).json({ error: 'Carrito o producto no encontrado' });
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar producto al carrito' });
    }
});

module.exports = router;
