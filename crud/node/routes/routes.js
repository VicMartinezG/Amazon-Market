import express from 'express'
import { getAllProducts } from '../controllers/ProductController.js'
import { createUser, getAllUsers, getUser } from '../controllers/UserController.js'
import { getAllItems, getItems, createItems } from '../controllers/CartItemController.js'
//import { getAllTotal } from '../controllers/CartTotalController.js'

const router = express.Router()

router.get('/', getAllUsers)
router.get('/:name/:password', getUser)
router.post('/', createUser)

router.get('/products', getAllProducts)

router.get('/cartitems-all', getAllItems)
router.get('/cartitems', getItems)
router.post('/cartitems-create', createItems)

//router.get('/carttotal', getAllTotal)

export default router