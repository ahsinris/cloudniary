import Joi from "joi";
class Validation {
    async createBannerValidation(req, res, next) {
        try {
            const schema = Joi.object({
                name: Joi.string().trim().required(),
                link: Joi.string().required(),
                status: Joi.boolean().required(),
                desktopImage: Joi.string().allow(null),
                mobileImage: Joi.string().allow(null),

            })
            await schema.validateAsync(req.body)
            next()

        }
        catch (e) {
            return res.status(400).json({
                message: 'validation failed' + e.message
            })

        }


    }
    async updateBannerValidation(req, res, next) {
        try {
            const schema = Joi.object({
                _id: Joi.string().required(),
                name: Joi.string().trim().required(),
                link: Joi.string().required(),
                status: Joi.boolean().required(),

            })
            await schema.validateAsync(req.body)
            next()

        }
        catch (e) {
            return res.status(400).json({
                message: 'validation failed' + e.message
            })

        }


    }


}

export default new Validation()



// export const createBannerValidation = async (req, res, next) => {
//     try {
//         await schema.validateAsync(req.body)
//         next()
//     }
//     catch (e) {
//         return res.status(400).json({
//             message: 'validation failed' + e.message
//         })
//     }
// }
