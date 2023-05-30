import CartItemtModel from "../modules/CartItemModel.js";

export const getAllItems = async (req, res) => {
    try {
        const cartitems = await CartItemtModel.findAll()
        res.json(cartitems)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getItems = async (req, res) => {
    try {
        const cartitems = await CartItemtModel.findOne({
            where: { image: req.params.image, name: req.params.name, price: req.params.price, quantity: req.params.quantity}
        })
        res.json(cartitems)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createItems = async (req, res) => {
    try {
        await CartItemtModel.create(req.body)
        res.json({"message": "Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}