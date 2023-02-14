import { housesService } from "../services/HousesService";
import BaseController from "../utils/BaseController";


export class HousesController extends BaseController{

  constructor(){
    super('/api/houses')
    this.router
      .get('', this.getHouses)
      .get('/:houseId', this.getHouseById)
      .post('', this.createHouse)
      .put('/:houseId', this.updateHouseById)
      .delete('/:houseId', this.deleteHouseById)
  }
  async updateHouseById(req, res, next) {
    try {
      const houseId = req.params.houseId
      const updatedHouse = req.body
      const house = await housesService.updateHouseById(houseId, updatedHouse)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }
  async deleteHouseById(req, res, next) {
    try {
      const houseId = req.params.houseId
      const house = await housesService.deleteHouseById(houseId)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }
  async getHouseById(req, res, next) {
    try {
      const houseId = req.params.houseId
      const house = await housesService.getHouseById(houseId)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }
  async createHouse(req, res, next) {
    try {
      const newHouseData = req.body
      const newHouse = await housesService.createHouse(newHouseData)
      res.send(newHouse)
    } catch (error) {
      next(error)
    }
  }
  async getHouses(req, res, next) {
    try {
      const query = req.query
      const houses = await housesService.getHouses(query)
      res.send(houses)
    } catch (error) {
      next(error)
    }
  }

}