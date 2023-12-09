
import { Router, query } from "express"

const router = Router()

router.get('/products', async (req, res) => {
    try {
        res.render('productsViews', {
            title: 'List of products',
        })
    } catch(error){
        res.status(400).send(error.message)
      }
})

export default router