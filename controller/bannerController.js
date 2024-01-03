import Service from '../service/bannerSeervice.js'


class Controller {
    async createBannerController(req, res) {
        try {
            const result = await Service.createBannerService(req)

            if (!result.sucess) {
                return res.status(result.status).json({
                    message: result.message
                })
            }


            return res.status(result.status).json({
                message: result.message,
                data: result.data
            })

        }
        catch (e) {
            console.log(`error in creating banners`, e)
            return res.status(500).json({
                status: 500,
                message: "interal server error"
            })
        }


    }
    async getAllBannerController(req, res) {
        try {
            const result = await Service.getAllBannerService()
            if (!result.sucess) {
                return res.status(400).json({
                    status: 400,
                    message: "error in getting all banner details "
                })
            }
            return res.status(result.status).json({
                status: result.status,
                message: result.message,
                data: result.data
            })

        }
        catch (e) {
            return res.status(500).json({
                status: 500,
                message: "internal server error" + e
            })
        }

    }

    async updateBannerController(req, res) {
        try {
            const result = await Service.updateBannerService(req.body)
            if (!result.sucess) {
                return res.status(400).json({
                    status: 400,
                    message: "error in updating banner details "
                })
            }
            return res.status(result.status).json({
                status: result.status,
                message: result.message,
                data: result.data
            })

        }
        catch (e) {
            return res.status(500).json({
                status: 500,
                message: "internal server error" + e
            })
        }

    }
}

export default new Controller()



