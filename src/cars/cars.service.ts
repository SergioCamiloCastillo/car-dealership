import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'Toyota', modelo: 'Corolla' },
    { id: 2, brand: 'Honda', modelo: 'Civic' },
    { id: 3, brand: 'Jeep', modelo: 'Cherokee' },
  ];
  public findAll() {
    return this.cars;
  }
  public findByOneById(id: number) {
    const car = this.cars.find((item) => item.id == id);
    if (!car) {
      throw new NotFoundException(`Carro con id ${id} no encontrado`);
    }

    return car;
  }
}
