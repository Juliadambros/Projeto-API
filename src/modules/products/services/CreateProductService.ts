import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductsRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}
export default class CreateProductService {
  public async execute({ name, price, quantity }: IRequest): Promise<Product> {
    console.log('create');
    const productsRepository = getCustomRepository(ProductRepository);
    console.log('create1');
    const productsExists = await productsRepository.findByName(name);
    if (productsExists) {
      throw new AppError("This is already one product with this name");
    }
    const product = productsRepository.create({ name, price, quantity });
    await productsRepository.save(product);
    console.log('create2');
    return product;
  }
}