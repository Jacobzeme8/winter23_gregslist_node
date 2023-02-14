import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class HousesService{
  async updateHouseById(houseId, updatedHouse) {
    const house = await this.getHouseById(houseId)
    house.bedrooms = updatedHouse.bedrooms || house.bedrooms
    house.price = updatedHouse.price || house.price
    house.bathrooms = updatedHouse.bedrooms || house.bathrooms
    house.description = updatedHouse.description || house.description
    house.sold = updatedHouse.sold !=null ? updatedHouse.sold : house.sold
    await house.save()
    return house
  }
  async deleteHouseById(houseId) {
    const house = await this.getHouseById(houseId)
    await house.remove()
    return house
  }
  async getHouseById(houseId) {
    const house = await dbContext.Houses.findById(houseId)
    if(!house){throw new BadRequest('Bad hoousus Id')}
    return house
  }
  async createHouse(newHouseData) {
    const newHouse = await dbContext.Houses.create(newHouseData)
    return  newHouse
  }
  async getHouses(query) {
    const houses = await dbContext.Houses.find(query)
    return houses
  }

}

export const housesService = new HousesService()