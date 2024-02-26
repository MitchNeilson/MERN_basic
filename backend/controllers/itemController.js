const Item = require('../models/Item')
const mongoose = require('mongoose')

// GET all items
const getItems = async (req,res) => {
    const items = await Item.find({})

    return res.status(200).json(items)
}

// GET a single item
const getItem = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such item'})
    }

    const item = await Item.findById(id)

    if (!item) {
        return res.status(404).json({error: 'No such item'})
    }
    
    return res.status(200).json(item)
}

// Post new item
const createItem =  async (req,res) => {
    const {name, description} = req.body
    try {
        const item = await Item.create({name,description})
        return res.status(200).json(item)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

// Delete an item
const deleteItem = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) { 
        return res.status(404).json({error: "No such item"})
    }

    const item = await Item.findOneAndDelete({_id: id})

    if (!item) { 
        return res.status(400).json({error: "No such item"})
    }

    return res.status(200).json(item)
}

// Update an item
const updateItem = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) { 
        return res.status(404).json({error: "No such item"})
    }

    const item = await Item.findOneAndUpdate({_id : id}, {
        ...req.body
    })

    if (!item) {
        return res.status(400).json({error: "No such item"})
    }

    return res.status(200).json(item)
}

module.exports = {
    getItems,
    getItem,
    createItem,
    deleteItem,
    updateItem
}