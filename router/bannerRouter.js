import express from 'express'
import Validation from '../validation/joi.js'
// import { createBannerValidation } from '../validation/joi.js'
const router = express.Router()
import Controller from '../controller/bannerController.js'
import uploadmultiple from '../middleware/multer.js'


router.post('/addbanner', uploadmultiple, Validation.createBannerValidation, Controller.createBannerController)
router.get('/getAllBanners', Controller.getAllBannerController)
router.put('/updatebanner', Validation.updateBannerValidation, Controller.updateBannerController)


export default router