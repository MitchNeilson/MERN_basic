const express = require('express')
const router = express.Router()
const {
    createItem, getItem, getItems, deleteItem, updateItem
} = require('../controllers/itemController')
const { create } = require('../models/Item')

// To get all items
router.get('/', getItems)

// To get a single item
router.get('/:id', getItem)

// Post new workout
router.post('/', createItem)

// Delete a workout
router.delete('/:id', deleteItem)

// Update a workout
router.patch('/:id', updateItem)


module.exports = router