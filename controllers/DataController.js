import Data from "../models/DataModel.js";

export const getDatas = async(req, res) => {
    try {
        const response = await Data.findAll();
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const getDataById = async(req, res) => {
    try {
        const response = await Data.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const createData = async(req, res) => {
    try {
        await Data.create(req.body)
        res.status(201).json({msg: "Data Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateData = async(req, res) => {
    try {
        await Data.update(req.body, {
            where:{
                id: req.params.id
            }
        })
        res.status(202).json({msg: "Data Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteData = async(req, res) => {
    try {
        await Data.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(202).json({msg: "Data Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

