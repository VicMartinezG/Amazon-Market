import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ProductModel = db.define('products',{
    nom_prod: { type: DataTypes.STRING},
    img_product: { type: DataTypes.STRING},
    stock: { type: DataTypes.STRING},
    precio: { type: DataTypes.STRING},
    descripcion: { type: DataTypes.STRING},
    tipo: { type: DataTypes.STRING}
}, {
    createdAt: false,
    updatedAt: false
})

export default ProductModel;