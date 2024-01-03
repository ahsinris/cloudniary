import Banner from "../model/banner.js";
import uploadToCloudniary from '../middleware/cloudniary.js'

class Service {
    async createBannerService(req) {

        const { name, link, status } = req.body
        const desktopImage = await uploadToCloudniary(req.files['desktopImage'][0].path);
        const mobileImage = await uploadToCloudniary(req.files['mobileImage'][0].path);

        const isbannerExist = await Banner.findOne({ name: name })

        if (isbannerExist) {
            return {
                sucess: false,
                status: 400,
                message: "banner already exist"
            }
        }

        const data = {
            name: name,
            link: link,
            status: status,
            desktopImage: desktopImage.secure_url,
            mobileImage: mobileImage.secure_url

        }

        const result = await Banner.create(data)

        return {
            sucess: true,
            status: 200,
            message: "banner created sucessfully",
            data: result
        }

    }

    async getAllBannerService() {
        const result = await Banner.find()
        return {
            sucess: true,
            status: 200,
            message: "all banner details have been retrieved",
            data: result
        }
    }

    async updateBannerService(req) {

        const { _id, name, link, status } = req

        console.log()


        const isbannerExist = await Banner.findById(_id)


        if (!isbannerExist) {
            return {
                sucess: false,
                status: 400,
                message: "this banner is not exist"
            }
        }

        const updateData = {
            name: name,
            link: link,
            status: status
        }

        const result = await Banner.updateOne({ _id }, updateData)

        return {
            sucess: true,
            status: 200,
            message: "banner details updated sucessfully",
            data: result
        }

    }
}

export default new Service()

