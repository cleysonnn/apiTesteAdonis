
'use strict'

const Atrativos = use('App/Models/Atrativo')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with atrativos
 */
class AtrativoController {
  /**
   * Show a list of all atrativos.
   * GET atrativos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  
 

  async indexALL () {
    const atrativo = Atrativos.all()
  
    return atrativo
  }


  async show ({ params }) {
    const atrativo = await Atrativos.findOrFail(params.id)
  
    await atrativo.load('images')
  
    return atrativo
  }


  async store ({ request, response }) {
    const data = request.only([
      'nome',
      'endereco',
      'cidade',
      'descricao',
      'tipo',
      'nota',
      'preco',
      'latitude',
      'longitude'
    ])
  
    const atrativo = await Atrativos.create({ ...data})
  
    return atrativo
  }

  async destroy ({ params, response }) {

    const atrativo = await Atrativos.findOrFail(params.id)
  
   /* if (atrativo.exists()) {
      return response.status(404).send({ error: 'Not found' })
    }*/
  
    await atrativo.delete()
  }


  async index ({ request }) {
    const { latitude, longitude } = request.all()
  
    const atrativos = Atrativos.query()
      .with('images')
      .nearBy(latitude, longitude, 10)
      .fetch()
  
    return atrativos
  }




  async update ({ params, request, response }) {
    const atrativo = await Atrativos.findOrFail(params.id)
  
    const data = request.only([
      'nome',
      'endereco',
      'cidade',
      'descricao',
      'tipo',
      'nota',
      'preco',
      'latitude',
      'longitude'
    ])
  
    atrativo.merge(data)
  
    await atrativo.save()
  
    return atrativo
  }
}

module.exports = AtrativoController