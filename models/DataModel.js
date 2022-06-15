import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Data = db.define('data',{
    article: DataTypes.STRING,
    description: DataTypes.STRING,
    qty: DataTypes.STRING,
    location: DataTypes.STRING
},{
    freezeTableName:true
})

export default Data;

(async() => {
    await db.sync();
})();