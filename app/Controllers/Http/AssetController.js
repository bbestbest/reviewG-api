'use strict'

// const AssetSchema = require("../../../database/migrations/1509527688826_asset_schema")

const Helpers = use("Helpers")
const Env = use("Env")
const AssetModel = use('App/Models/Asset')

class AssetController {

  show({ request, response }) {
    const { fileName } = request.params
    return response.download(Helpers.tmpPath(`upload/${fileName}`))
  }
  // async getImage({ request, response }) {
    //   const { asset_id } = request.params
    //   const { asset_path } = await AssetModel.find(asset_id)
    //   return response.download(Helpers.tmpPath(`upload/${asset_path}`))
    // }

  // async update({ request }) {
  //   const getData = await AssetModel.query().count()
  //   let translateData = Object.values(JSON.parse(JSON.stringify(getData)))
  //   const mapData = translateData.map(count)
  //   console.log(convertedResponse)
  //   let data = await AssetModel.find(translateData.length)
  //   data.merge({post_id:translateData.length})
  //   await data.save()
  //   return { status: 200,error: undefined, data: data}
  // }

  async upload({ request }) {
    const { post_id } = request.body
    const file = request.file("image", {
      types: ["image"],
      size: "10mb"
    })
    const fileName = `${new Date().getTime()}.jpg`
    await file.move(Helpers.tmpPath("upload"), {
      name: fileName
    })
    if (!file.moved())
      throw new Error('File move error')

    const { asset_path } = {
      asset_path: `http://${Env.get('HOST')}:${Env.get('PORT')}/api/v1/assets/${fileName}`
    }
    await AssetModel.create({ asset_path, post_id })

    // const { asset_path } = {
    //   asset_path: `${fileName}`
    // }
    // await AssetModel.create({ asset_path })

    return {
      status: 200,
      data: {path: `http://${Env.get('HOST')}:${Env.get('PORT')}/api/v1/assets/${fileName}`, data: post_id}
    }
  }
}

module.exports = AssetController
