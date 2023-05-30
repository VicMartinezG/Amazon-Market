import UserModel from "../modules/UserModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll()
        res.json(users)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findOne({
            where: { name: req.params.name, password: req.params.password}
        })
        res.json(user)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createUser = async (req, res) => {
    try {
        await UserModel.create(req.body)
        res.json({"message": "Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}