'use strict'

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

  async upload({ request }) {
    const file = request.file("image", {
      types: ["image"],
      size: "2mb"
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
    await AssetModel.create({ asset_path })

    // const { asset_path } = {
    //   asset_path: `${fileName}`
    // }
    // await AssetModel.create({ asset_path })

    return {
      status: 200,
      data: {path: `http://${Env.get('HOST')}:${Env.get('PORT')}/api/v1/assets/${fileName}`}
    }
  }
}

module.exports = AssetController
