import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv'
dotenv.config()
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECERET
})


async function uploadToCloudniary(filePath) {

    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(filePath, {
            resource_type: 'auto',
            folder: 'ris'
        }).then(result => {
            fs.unlink(filePath, err => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
            .catch(error => {
                reject(error)
            })
    })

}

export default uploadToCloudniary 