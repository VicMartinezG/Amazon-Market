import db from "../database/db.js";
import { DataTypes } from "sequelize";

const CartItemtModel = db.define('cartitems',{
    image: { type: DataTypes.STRING},
    name: { type: DataTypes.STRING},
    price: { type: DataTypes.STRING},
    quantity: { type: DataTypes.STRING},

}, {
    createdAt: false,
    updatedAt: false
})

export default CartItemtModel;