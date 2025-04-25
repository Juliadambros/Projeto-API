import { EntityRepository, Repository } from "typeorm";
import Product from "../entities/Product";

console.log('repositorio1');
@EntityRepository(Product)
export default class ProductRepository extends Repository<Product> {
    
	public async findByName(name: string): Promise<Product | undefined> {
        console.log('repositorio');
		const product = this.findOne({ where: { name } });
		return product;
	}
}	