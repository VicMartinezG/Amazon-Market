import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UserModel = db.define('users',{
    name: { type: DataTypes.STRING},
    lastnameP: { type: DataTypes.STRING},
    lastnameM: { type: DataTypes.STRING},
    country: { type: DataTypes.STRING},
    departament: { type: DataTypes.STRING},
    city: { type: DataTypes.STRING},
    email: { type: DataTypes.STRING},
    phone: { type: DataTypes.STRING},
    password: { type: DataTypes.STRING}
}, {
    createdAt: false,
    updatedAt: false
})

export default UserModel;