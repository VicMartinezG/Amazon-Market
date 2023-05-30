import { Sequelize } from "sequelize";

const db = new Sequelize('crudnicolas','root','Vic47190354',{
    host:'localhost',
    dialect: 'mysql'
})

export default db;