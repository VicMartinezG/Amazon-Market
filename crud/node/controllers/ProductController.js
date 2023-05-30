import ProductModel from "../modules/ProductModel.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.findAll()
        res.json(products)
    } catch (error) {
        res.json({message: error.message})
    }
}

