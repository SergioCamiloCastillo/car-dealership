import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = ['Mazda', 'Nissan', 'Toyota'];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    console.log('el id es=>', +id);
    return this.cars[id];
  }
}
